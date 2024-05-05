<script setup lang="ts">
import TheNav from '~/layouts/the-nav.vue'
import TheHeader from '~/layouts/the-header.vue'
import CommentList from '~/components/layouts/CommentList.vue'

const drawer = ref(false)
const isShown = ref(false)

const length = ref(3)
const tab = ref(null)
const isMounted = ref(false)

watch(length, val => tab.value = val - 1)

onMounted(() => {
  isMounted.value = true
})

function toggleCommentVisibility() {
  isShown.value = !isShown.value
}

const comments = ref([
  {
    content: '댓글1',
    depth: 1,
    comments: [
      {
        content: '대댓글1',
        depth: 2,
        comments: [
          {
            content: '대대댓글1',
            depth: 3,
            comments: [
              {
                content: '대대대댓글1',
                depth: 4,
                comments: [],
              },
            ],
          },
        ],
      },
    ],
  },
])
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

          <v-divider />

          <CommentList :comments />
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
