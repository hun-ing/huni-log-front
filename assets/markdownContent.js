export const markdownContent = `>**# 관련 소스는 [여기](https://github.com/hun-ing/custom-logback)에서 확인하실 수 있습니다.**

### 끝날 때까지 끝난 게 아니야...
기존에 개발한 logback 커스텀 동작이 잘 되는 줄 알았으나. 코드를 다듬는 과정에서 발견한 심각한 오류가 있었다. 바로... \`몇 분에 시작하든 상관없이\` 5, 10, 15, 20... 55 이런 패턴으로 파일이 롤링되어야 했으나. \`시작하는 분 + 5분\`에 파일이 롤링된다는 것이다... 

예를 들자면 3시 16분에 애플리케이션이 구동되어 logback이 내부적으로 세팅을 끝내면, 파일 롤링이 3시 21분, 26분, 31분... 이런 식으로 된다는 것이다.

#### #문제의 잘못된 로그 파일
<img src="https://velog.velcdn.com/images/hun-ing/post/402246db-91cc-4e2f-a02b-4ab58de2ac77/image.PNG">


### 그래서 무엇이 문제였는가?
결론부터 말하자면, \`computeNextCheck\` -> \`getEndOfNextNthPeriod\` -> \`innerGetEndOfNextNthPeriod\` 메서드의 부분이 문제였고 이것은 나의 기존 로직 분석이 미흡했던 것 같다. 

가장 마지막에 호출되는 \`RollingCalendar\` 클래스의 \`innerGetEndOfNextNthPeriod\` 메서드를 살펴보면 다음과 같다.
\`\`\`java
static private Date innerGetEndOfNextNthPeriod(Calendar cal, PeriodicityType periodicityType, Date now, int numPeriods) {
\tcal.setTime(now);
\tswitch (periodicityType) {
\tcase TOP_OF_MILLISECOND:
\t\tcal.add(Calendar.MILLISECOND, numPeriods);
\t\tbreak;

\tcase TOP_OF_SECOND:
\t\tcal.set(Calendar.MILLISECOND, 0);
\t\tcal.add(Calendar.SECOND, numPeriods);
\t\tbreak;

\tcase TOP_OF_MINUTE:
\t\tcal.set(Calendar.SECOND, 0);
\t\tcal.set(Calendar.MILLISECOND, 0);
\t\tcal.add(Calendar.MINUTE, numPeriods);
\t\tbreak;

\tcase TOP_OF_HOUR:
\t\tcal.set(Calendar.MINUTE, 0);
\t\tcal.set(Calendar.SECOND, 0);
\t\tcal.set(Calendar.MILLISECOND, 0);
\t\tcal.add(Calendar.HOUR_OF_DAY, numPeriods);
\t\tbreak;

\tcase TOP_OF_DAY:
\t\tcal.set(Calendar.HOUR_OF_DAY, 0);
\t\tcal.set(Calendar.MINUTE, 0);
\t\tcal.set(Calendar.SECOND, 0);
\t\tcal.set(Calendar.MILLISECOND, 0);
\t\tcal.add(Calendar.DATE, numPeriods);
\t\tbreak;

\tcase TOP_OF_WEEK:
\t\tcal.set(Calendar.DAY_OF_WEEK, cal.getFirstDayOfWeek());
\t\tcal.set(Calendar.HOUR_OF_DAY, 0);
\t\tcal.set(Calendar.MINUTE, 0);
\t\tcal.set(Calendar.SECOND, 0);
\t\tcal.set(Calendar.MILLISECOND, 0);
\t\tcal.add(Calendar.WEEK_OF_YEAR, numPeriods);
\t\tbreak;

\tcase TOP_OF_MONTH:
\t\tcal.set(Calendar.DATE, 1);
\t\tcal.set(Calendar.HOUR_OF_DAY, 0);
\t\tcal.set(Calendar.MINUTE, 0);
\t\tcal.set(Calendar.SECOND, 0);
\t\tcal.set(Calendar.MILLISECOND, 0);
\t\tcal.add(Calendar.MONTH, numPeriods);
\t\tbreak;

\tdefault:
\t\tthrow new IllegalStateException("Unknown periodicity type.");
\t}

\treturn cal.getTime();
}
\`\`\`
여기서 봐야 할 부분은 매개변수로 들어오는 \`int numPeriods\` 이 부분이 내가 해결책이라고 생각했던 부분이었고 (logback의 기본 코드에서는 1로 고정) 오버라이딩해서 사용자 정의 값으로 넣어주도록 변경했던 부분이다.

그러나 커스텀 logback에서 이 메서드에 진입 시 실행되는 case는 \`case TOP_OF_MINUTE:\` 이 case가 실행되는데, 해석하자면, \`초를 0으로 세팅\` -> \`밀리초를 0으로 세팅\` -> \`매개변수 numPeriods 값을 분 값에 더함\`으로 볼 수 있다. 그래서 16분에 시작하면 21분, 26분, ... 이렇게 동작이 되었던 것이다...

### 그래서 생각한 방법은?
곰곰이 생각하다가 찾은 방법은 커스텀 한 클래스에서 파일 롤링의 가장 중요한 역할을 하는 \`this.nextCheck\` 변수의 값을 조작하는 것이다.

이전에 포스팅에서 설명한 커스텀 클래스를 보면 아래와 같다. - **\`문제 발생 버전\`**
\`\`\`java
@NoAutoStart
public class CustomTimeBasedFileNamingAndTriggeringPolicy<E> extends DefaultTimeBasedFileNamingAndTriggeringPolicy<E> {

\tprivate final int LOG_CREATION_CYCLE = 5;

\t@Override
\tpublic boolean isTriggeringEvent(File activeFile, E event) {
\t\tlong time = this.getCurrentTime();
\t\tif (time >= this.nextCheck) {
\t\t\tDate dateOfElapsedPeriod = this.dateInCurrentPeriod;
\t\t\tthis.addInfo("Elapsed period: " + dateOfElapsedPeriod);

\t\t\tthis.setDateInCurrentPeriod(this.nextCheck);

\t\t\tthis.elapsedPeriodsFileName = this.getCurrentPeriodsFileNameWithoutCompressionSuffix();

\t\t\tthis.setDateInCurrentPeriod(time);
\t\t\tthis.computeNextCheck();
\t\t\treturn true;
\t\t} else {
\t\t\treturn false;
\t\t}
\t}

\t@Override
\tprotected void computeNextCheck() {
\t\tthis.nextCheck = this.rc.getEndOfNextNthPeriod(this.dateInCurrentPeriod, LOG_CREATION_CYCLE).getTime();
\t}
}
\`\`\`
해당 메서드를 보면 \`isTriggeringEvent\` 메서드에서 \`this.nextCheck\` 변수를 통해 롤링 실행 여부를 결정하고, 해당 조건 충족 시 내부에서 \`this.setDateInCurrentPeriod(this.nextCheck);\`을 실행하여 롤링 파일 이름에 사용되는 변수 \`this.dateInCurrentPeriod\` 값을 세팅하고,

\`this.elapsedPeriodsFileName = this.getCurrentPeriodsFileNameWithoutCompressionSuffix();\` 
이 부분에서 실제 롤링 파일 이름을 생성하여 저장하게 된다.

그 후에 다시 다음 롤링 파일 시간을 지정하기 위해 \`this.setDateInCurrentPeriod(time);\`을 실행하여 \`computeNextCheck\` 메서드에서 사용될 \`this.dateInCurrentPeriod\` 변수 값을 세팅한다.

이후에는 위에서 설명한 대로 \`innerGetEndOfNextNthPeriod\` 메서드를 실행하여 (잘못된)\`this.nextCheck\` 변수 값을 설정하게 되는 것이다.

#### 그렇다면...!
\`this.nextCheck\` 값을 설정해 주는 \`computeNextCheck\` 메서드를 조작하여 \`this.nextCheck\` 변수 값을 몇 분에 시작되든지 \`5분 단위 값\`에서 \`초과된 분 값 + 모자란 분 값\`을 계산해주면 원하는 결과를 얻을 수 있지 않을까!? 예를 들자면 다음과 같다.

>
1. 16분에 시작된다면 우리가 원하는 \`시작 시간은 15분\`, \`파일 롤링 시간은 20분\`이다.
2. \`원하는 시작 시간인 15분\`에서 \`실제 시작 시간인 16분\`은 \`1분 초과된\` 값이다.
3. \`원하는 파일 롤링 시간인 20분\`에서 \`실제 시작 시간인 16분\`은 \`4분 모자란\` 값이다.
4. 결국 \`실제 시작 시간인 16분\`에 \`모자란 분 값인 4분\`을 더하면 우리가 원하는 파일 롤링 시간인 20분이 되는 것이다.

#### 계산 방법...?
정확한 계산을 위해서 모든 계산은 밀리초로 계산하였다. 방법은 다음과 같다.

> 
1. \`1분을 밀리초\`로 변환하면 \`60000\`이다.
2. 여기에 우리가 원하는 단위의 분 값인 \`5를 곱하면\` 5분의 밀리초인 \`300000\`이다.
3. \`2023-06-23 22:16:00\`을 실제 시작 시간이라고 가정한다면 밀리초로 \`1687526160000\`이다.
4. \`실제 시작 시간 밀리초(1687526160000)\`를 \`우리가 원하는 단위 분 값의 밀리초300000\`로 나눈 뒤 나머지 값을 통해 \`원하는 시작 시간에서 초과한 분의 밀리초 값\`을 얻을 수 있다. (여기서는 \`60000(1분)\`이 나온다.
5. 그럼 우리가 원하는 것은 5분 단위로 계산이기 때문에 \`원하는 단위인 5분(300000)\`에서 4번에서 얻은 \`원하는 시작 시간에서 초과된 분의 밀리초 값 1분(60000)\`을 뺀다면, \`원하는 파일 롤링 시간보다 모자란 분인 4분(240000)\`을 얻을 수 있다.
6. 그렇다면, \`실제 시작 시간 밀리초 1687526160000 \`에 \`원하는 파일 롤링 시간보다 모자란 밀리초 240000\`을 더하면 \`원하는 파일 롤링 시간인 2023-06-23 22:20:00\`의 밀리초인 \`1687526400000\` 값을 얻을 수 있는 것이다.

### 변경된 코드는 무엇인가?
위에서 언급했듯이 \`computeNextCheck\` 메서드가 변경되었다. 변경 전 후를 비교하면 다음과 같다.

\`\`\`java
// 변경 전 코드
private final int LOG_CREATION_CYCLE = 5;

@Override
protected void computeNextCheck() {
\tthis.nextCheck = this.rc.getEndOfNextNthPeriod(this.dateInCurrentPeriod, LOG_CREATION_CYCLE).getTime();
}


// 변경 후 코드
private final int LOG_CREATION_CYCLE_MINUTE = 5;
private final int ONE_MINUTE_MILLISECONDS = 60000;
private final int LOG_CREATION_CYCLE_MILLISECONDS = LOG_CREATION_CYCLE_MINUTE * ONE_MINUTE_MILLISECONDS;

@Override
protected void computeNextCheck() {
\tlong milliseconds = this.dateInCurrentPeriod.getTime();
\tlong remainder = milliseconds % LOG_CREATION_CYCLE_MILLISECONDS;
\tlong difference = LOG_CREATION_CYCLE_MILLISECONDS - remainder;
\tthis.nextCheck = milliseconds + difference;
}
\`\`\`

변경 전 코드를 보면 최종적으로 \`RollingCalendar\` 클래스의 \`innerGetEndOfNextNthPeriod\` 메서드를 호출하여 \`this.nextCheck\`의 값을 설정했다면,

변경 후 코드에는 \`long milliseconds = this.dateInCurrentPeriod.getTime();\` 값을 통하여, \`실제 시작된 시간 or 파일 롤링이 발생한 시간\`의 밀리초 값을 가져와 위에서 말한 방법대로 계산하는 로직을 구현했다. 참고로 위에서 선언된 상수 값은 편의를 위해 \`원하는 롤링 분 단위\`, \`1분의 밀리초\`, \`원하는 롤링 분의 밀리초\`를 선언해 둔 것이다.

보기 쉽게 밀리초 값을 괄호로 표시해서 본다면 다음과 같다.
\`\`\`java
// 변경 후 코드
// 원하는 파일 롤링 주기(분) 이다.
private final int LOG_CREATION_CYCLE_MINUTE = 5;
// 1분을 밀리초로 변환했을 경우의 값이다.
private final int ONE_MINUTE_MILLISECONDS = 60000;
// 원하는 파일 롤링 주기를 밀리초로 계산한 값이다.
private final int LOG_CREATION_CYCLE_MILLISECONDS = LOG_CREATION_CYCLE_MINUTE * ONE_MINUTE_MILLISECONDS;

@Override
protected void computeNextCheck() {
\t// 실제 시작 시간이 2023-06-23 22:16:00 이라고 가정한다.
    // 2023-06-23 22:16:00 milliseconds 값은 1687526400000 이다.
    // milliseconds 변수에 1687526400000 값이 저장된다.
\tlong milliseconds = this.dateInCurrentPeriod.getTime();
    
    // 1687526400000(실제 시작 시간의 milliseconds) % 300000(5분의 milliseconds) = 60000 (초과된 milliseconds)
\tlong remainder = milliseconds % LOG_CREATION_CYCLE_MILLISECONDS;
    
    // 300000(5분의 milliseconds) - 60000(초과된 milliseconds) = 240000(모자란 milliseconds)
\tlong difference = LOG_CREATION_CYCLE_MILLISECONDS - remainder;
    
    // 1687526160000 + 240000 = 1687526400000
\tthis.nextCheck = milliseconds + difference;
}
\`\`\`

### 마치며...
이렇게 발생한 문제에 대한 해결 방안을 생각해보고 수정하는 작업을 마쳤다. 이게 온전한 방법인지 아닌지는 아직 잘 모르겠지만, 추후에 해당 코드를 실제 프로젝트에 적용하고나서 발생하는 문제가 있다면, 해당 문제를 또 다시 해결하는 방향으로 해야할 것 같다. 그럼 진짜 이만...?`
