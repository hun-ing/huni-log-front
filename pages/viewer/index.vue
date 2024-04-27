<script setup>
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/i18n/ko-kr'
import { Editor } from '@toast-ui/editor'
import { onMounted } from 'vue'
import { useElementBounding } from '@vueuse/core'
import { markdownContent } from '~/assets/markdownContent.js'

const listRight = ref(0)
const rowEl = ref(null)
const listEl = ref(null)

const { x } = useElementBounding(rowEl)
const { width } = useElementBounding(listEl)

watch(x, (value) => {
  listRight.value = value - width.value - 30
})

onMounted(() => {
  Editor.factory({
    el: document.querySelector('#viewer'),
    viewer: true,
    height: '500px',
    initialValue: markdownContent,
  })
})
</script>

<template>
  <v-row ref="rowEl" class="h-100">
    <v-list ref="listEl" min-width="200" class="position-fixed bg-transparent" :style="{ right: `${listRight}px` }" style="border-left: 2px solid #F1F3F5;">
      <v-list-item
        v-for="n in 3"
        :key="n"
        :title="`태그 ${n}`"
      />
    </v-list>
    <v-col cols="12">
      <div id="viewer" />
    </v-col>
  </v-row>
</template>

<style scoped>
</style>
