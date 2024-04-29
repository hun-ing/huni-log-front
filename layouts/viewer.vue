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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima
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
