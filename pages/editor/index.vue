<script setup>
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/i18n/ko-kr'
import { Editor } from '@toast-ui/editor'
import { onMounted } from 'vue'

definePageMeta({
  layout: 'blank',
})

onMounted(() => {
  console.log('onMounted editor!')
  const viewer = Editor.factory({
    el: document.querySelector('#viewer'),
    viewer: true,
    height: '500px',
  })

  const editor = new Editor({
    el: document.querySelector('#editor'),
    height: '100%',
    initialEditType: 'markdown',
    language: 'ko-KR',
    events: {
      change: () => {
        const value = editor.getMarkdown()
        viewer.setMarkdown(value)
      },
    },
  })
  editor.getMarkdown()
})
</script>

<template>
  <v-row class="h-100">
    <v-col cols="6">
      <v-row class="h-100 flex-column">
        <v-col class="flex-grow-0">
          <v-textarea
            row-height="15"
            rows="1"
            class="custom-placeholder-color"
            variant="plain"
            auto-grow
            no-resize
            placeholder="제목을 입력하세요"
            hide-details
          />
        </v-col>
        <v-divider class="mb-3" />
        <v-col>
          <div id="editor" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="6">
      <div id="viewer" />
    </v-col>
  </v-row>
</template>

<style scoped>
</style>
