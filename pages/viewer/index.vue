<script setup>
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/i18n/ko-kr'
import { Editor } from '@toast-ui/editor'
import { onMounted } from 'vue'

onMounted(() => {
  Editor.factory({
    el: document.querySelector('#viewer'),
    viewer: true,
    height: '500px',
    initialValue: '# 테스트 입니다',
  })
})
</script>

<template>
  <v-row class="h-100">
    <v-col cols="12">
      <div id="viewer" />
    </v-col>
  </v-row>
</template>

<style scoped>
</style>
