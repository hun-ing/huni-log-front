<script setup lang="ts">
import TheNav from '~/layouts/the-nav.vue'
import TheHeader from '~/layouts/the-header.vue'

const drawer = ref(false)

const length = ref(3)
const tab = ref(null)
const isMounted = ref(false)

watch(length, val => tab.value = val - 1)

onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <v-app class="ms-20 me-20">
    <TheNav v-model="drawer" />
    <TheHeader v-model="drawer" />

    <v-main>
      <v-container fluid class="h-100 justify-center align-center">
        <v-card class="h-100 v-col-6 ma-auto" variant="flat">
          <v-card-item>
            <v-card
              class="mx-auto"
            >
              <template #title>
                <p class="font-weight-bold text-h2">
                  게시글 제목
                </p>
              </template>

              <template #subtitle />

              <v-card-actions>
                <p class="text-subtitle-1">
                  후니
                </p>
                <span class="separator">·</span>
                <p class="text-subtitle-1">
                  2023년 6월 23일
                </p>
                <v-spacer />

                <v-btn
                  color="medium-emphasis"
                  text="통계"
                />

                <v-btn
                  color="medium-emphasis"
                  text="수정"
                />

                <v-btn
                  color="medium-emphasis"
                  text="삭제"
                />
              </v-card-actions>
            </v-card>
          </v-card-item>
          <v-card-item>
            <v-chip-group
              column
            >
              <v-chip
                v-for="n in 3" :key="n"
                text="Category"
                variant="tonal"
                class="bg-deep-purple-lighten-2"
              />
            </v-chip-group>
          </v-card-item>
          <v-card-item>
            <v-expansion-panels>
              <v-expansion-panel>
                <template #title>
                  목록 보기
                </template>
                <template #text>
                  <v-list tag="ol">
                    <v-list-item
                      v-for="(item, index) in 3"
                      :key="item"
                      tag="li"
                      min-height="0"
                      class="ps-0"
                    >
                      <template #prepend>
                        <p class="font-italic text-medium-emphasis">
                          {{ index + 1 }}.
                        </p>
                      </template>
                      <template #title>
                        <a href="#" class="text-decoration-none ms-2 font-italic text-medium-emphasis">목록 {{ item }}</a>
                      </template>
                    </v-list-item>
                  </v-list>
                </template>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-item>
          <v-card-item>
            <v-card
              color="basil"
              flat
            >
              <v-card-text v-if="isMounted" class="pa-1">
                <slot />
              </v-card-text>
            </v-card>
          </v-card-item>

          <v-card-item class="mt-16">
            <v-card>
              <template #prepend>
                <v-img
                  src="~/assets/images/logo-small.png" width="180"
                />
              </template>

              <template #title>
                <p class="font-weight-bold text-h4">
                  후니
                </p>
              </template>

              <template #subtitle>
                <p class="text-subtitle-1 pa-0">
                  기술 블로그
                </p>
              </template>
            </v-card>
          </v-card-item>
          <v-card-item class="pt-3 pb-3">
            <v-divider class="mb-10" />
            <v-row justify="end" class="pa-1">
              <v-col cols="12">
                <v-textarea
                  row-height="15"
                  rows="3"
                  variant="outlined"
                  auto-grow
                  no-resize
                  placeholder="댓글을 작성하세요"
                  hide-details
                />
              </v-col>
              <v-col cols="auto">
                <v-btn variant="elevated" color="deep-purple-lighten-2">
                  댓글 작성
                </v-btn>
              </v-col>
            </v-row>
          </v-card-item>

          <v-card-item class="pt-3 pb-3">
            <v-card>
              <template #prepend>
                <v-img
                  src="~/assets/images/logo-small.png" width="60"
                />
              </template>

              <template #title>
                <p class="font-weight-bold text-h5">
                  후니
                </p>
              </template>

              <template #subtitle>
                <p class="text-subtitle-2 pa-0">
                  기술 블로그
                </p>
              </template>

              <template #append>
                <v-btn variant="plain">
                  수정
                </v-btn>
                <v-btn variant="plain">
                  삭제
                </v-btn>
              </template>

              <v-card-text>
                댓글1
              </v-card-text>

              <v-card-actions>
                <v-btn color="deep-purple-lighten-2" class="font-weight-bold">
                  +답글 달기
                </v-btn>
              </v-card-actions>

              <v-card-item>
                <v-row justify="end" class="pa-5  bg-grey-lighten-5">
                  <v-col cols="12">
                    <v-textarea
                      row-height="15"
                      rows="3"
                      class="bg-white"
                      variant="outlined"
                      auto-grow
                      no-resize
                      placeholder="댓글을 작성하세요"
                      hide-details
                    />
                  </v-col>
                  <v-col cols="auto">
                    <v-btn variant="elevated" color="deep-purple-lighten-2">
                      댓글 작성
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-item>
            </v-card>
          </v-card-item>

          <v-divider />

          <v-card-item class="pt-3 pb-3">
            <v-card>
              <template #prepend>
                <v-img
                  src="~/assets/images/logo-small.png" width="60"
                />
              </template>

              <template #title>
                <p class="font-weight-bold text-h5">
                  후니
                </p>
              </template>

              <template #subtitle>
                <p class="text-subtitle-2 pa-0">
                  기술 블로그
                </p>
              </template>

              <template #append>
                <v-btn variant="plain">
                  수정
                </v-btn>
                <v-btn variant="plain">
                  삭제
                </v-btn>
              </template>

              <v-card-text>
                댓글1
              </v-card-text>

              <v-card-actions>
                <v-btn color="deep-purple-lighten-2" class="font-weight-bold">
                  +답글 달기
                </v-btn>
              </v-card-actions>

              <v-card-item>
                <v-card class="pa-5 bg-grey-lighten-5">
                  <template #prepend>
                    <v-img
                      src="~/assets/images/logo-small.png" width="60"
                    />
                  </template>

                  <template #title>
                    <p class="font-weight-bold text-h5">
                      후니
                    </p>
                  </template>

                  <template #subtitle>
                    <p class="text-subtitle-2 pa-0">
                      기술 블로그
                    </p>
                  </template>

                  <template #append>
                    <v-btn variant="plain">
                      수정
                    </v-btn>
                    <v-btn variant="plain">
                      삭제
                    </v-btn>
                  </template>

                  <v-card-text>
                    댓글1
                  </v-card-text>

                  <v-card-actions>
                    <v-btn color="deep-purple-lighten-2" class="font-weight-bold">
                      +숨기기
                    </v-btn>
                  </v-card-actions>

                  <v-card-item>
                    <v-row justify="end" class="pa-5 bg-grey-lighten-4">
                      <v-col cols="12">
                        <v-textarea
                          row-height="15"
                          rows="3"
                          class="bg-white"
                          variant="outlined"
                          auto-grow
                          no-resize
                          placeholder="댓글을 작성하세요"
                          hide-details
                        />
                      </v-col>
                      <v-col cols="auto">
                        <v-btn variant="elevated" color="deep-purple-lighten-2">
                          댓글 작성
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card-item>
                </v-card>
              </v-card-item>
            </v-card>
          </v-card-item>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.separator {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>
