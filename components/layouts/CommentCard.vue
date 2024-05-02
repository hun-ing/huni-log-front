<script setup>
import CommentEditor from '~/components/layouts/CommentEditor.vue'

const isShownCard = ref(false)
const isShownEditor = ref(false)
function toggleCommentCard() {
  isShownCard.value = !isShownCard.value
}
function toggleCommentEditor() {
  isShownEditor.value = !isShownEditor.value
}
</script>

<template>
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
        <v-btn variant="plain" @click="toggleCommentEditor">
          댓글
        </v-btn>
      </template>

      <v-card-text>
        댓글1
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple-lighten-2" class="font-weight-bold" @click="toggleCommentCard">
          {{ isShownCard ? '-댓글 접기' : '+댓글 펼치기' }}
        </v-btn>
      </v-card-actions>

      <v-card-item v-if="isShownEditor">
        <CommentEditor />
      </v-card-item>
    </v-card>
  </v-card-item>
</template>

<style scoped>
</style>
