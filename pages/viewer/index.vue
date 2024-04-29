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
const titleList = ref([])

const { x } = useElementBounding(rowEl)
const { width } = useElementBounding(listEl)

watch(x, (value) => {
  listRight.value = value - width.value - 60
})

onMounted(() => {
  const viewer = document.querySelector('#viewer')
  Editor.factory({
    el: viewer,
    viewer: true,
    initialValue: markdownContent,
  })

  function callback(entries, observer) {
    entries.forEach((entry) => {
      titleList.value.forEach(item => item.isSelected = item.id === entry.target.id)
    })
  }

  const options = {
    root: null,
    rootMargin: '0px 0px -97% 0px',
    threshold: 0,
  }

  viewer.querySelectorAll('h3').forEach((item, index) => {
    titleList.value.push({
      id: `title-${index}`,
      title: item.textContent,
      isSelected: false,
    })
    item.id = `title-${index}`
    const observer = new IntersectionObserver(callback, options)
    observer.observe(item)
  })
})
</script>

<template>
  <v-row ref="rowEl" class="h-100">
    <v-list ref="listEl" min-width="200" class="position-fixed bg-transparent" :style="{ right: `${listRight}px` }" style="border-left: 2px solid #F1F3F5;">
      <v-list-item
        v-for="item in titleList"
        :key="item.id"
        tag="li"
        min-height="auto"
      >
        <template #subtitle>
          <a :href="`#${item.id}`" class="text-decoration-none" :class="item.isSelected ? 'font-weight-bold' : ''">{{ item.title }}</a>
        </template>
      </v-list-item>
    </v-list>
    <v-col cols="12">
      <div id="viewer" />
    </v-col>
  </v-row>
</template>

<style scoped>
.text-decoration-none {
  text-decoration: none !important;
  color: inherit;
}
</style>
