<script setup>
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/i18n/ko-kr'
import { Editor } from '@toast-ui/editor'
import { onMounted } from 'vue'

definePageMeta({
  layout: 'blank',
})

const title = ref('')
const chips = ref([])

const runtimeConfig = useRuntimeConfig()

function remove(item) { chips.value.splice(chips.value.indexOf(item), 1) }

let editor = null

onMounted(() => {
  const viewer = Editor.factory({
    el: document.querySelector('#viewer'),
    viewer: true,
    height: '500px',
  })

  editor = new Editor({
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
    hooks: {
      addImageBlobHook: async (blob, callback) => {
        try {
          const formData = new FormData()
          formData.append('image', blob)

          const { data } = await useFetch(`${runtimeConfig.public.apiBase}/api/image-upload`, {
            method: 'POST',
            body: formData,
          })

          const filename = data.value

          const imageUrl = `${runtimeConfig.public.apiBase}/api/image-print?filename=${filename}`
          callback(imageUrl, 'image alt attribute')
        }
        catch (error) {
          console.error('업로드 실패 : ', error)
        }
      },
    },
  })
  editor.getMarkdown()
})

async function onSubmit() {
  console.log(editor.getMarkdown())
  console.log(chips.value)
  console.log(title.value)

  try {
    const request = {
      title: title.value,
      content: editor.getMarkdown(),
      categories: chips.value,
    }

    const { data } = await useFetch(`${runtimeConfig.public.apiBase}/api/post`, {
      method: 'POST',
      body: JSON.stringify(request),
    })

    console.log(data)
  }
  catch (error) {
    console.error('저장 실패 : ', error)
  }
}
</script>

<template>
  <v-row class="h-100">
    <v-col cols="6">
      <v-row class="h-100 flex-column">
        <v-col class="flex-grow-0">
          <v-textarea
            v-model="title"
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
        <v-col class="flex-grow-0">
          <v-combobox
            v-model="chips"
            variant="solo-filled"
            placeholder="태그를 입력해 주세요"
            chips
            clearable
            multiple
            hide-details
          >
            <template #selection="{ attrs, item, select, selected }">
              <v-chip
                v-bind="attrs"
                :model-value="selected"
                closable
                @click="select"
                @click:close="remove(item)"
              >
                <strong>{{ item }}</strong>&nbsp;
                <span>(interest)</span>
              </v-chip>
            </template>
          </v-combobox>
        </v-col>
        <v-col class="pb-0 ">
          <div id="editor" spellcheck="false" />
        </v-col>
        <v-col class="flex-grow-0 pb-0">
          <div class="text-end">
            <v-btn
              class="text-none"
              color="success"
              variant="elevated"
              width="90"
              @click="onSubmit"
            >
              저장하기
            </v-btn>
          </div>
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
