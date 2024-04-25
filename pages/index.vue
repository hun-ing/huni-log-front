<script setup lang="ts">
import { useElementBounding } from '@vueuse/core'

const listLeft = ref(0)
const rowEl = ref(null)
const listEl = ref(null)

const { x } = useElementBounding(rowEl)
const { width } = useElementBounding(listEl)

watch(x, (value) => {
  listLeft.value = value - width.value - 30
})
</script>

<template>
  <v-row ref="rowEl">
    <v-list ref="listEl" min-width="200" class="position-fixed bg-transparent" :style="{ left: `${listLeft}px` }">
      <v-list-subheader>태그 목록</v-list-subheader>
      <v-divider />
      <v-list-item
        v-for="n in 3"
        :key="n"
        :title="`태그 ${n}`"
      />
    </v-list>
    <v-col v-for="n in 5" :key="n" cols="4">
      <v-card
        class="mx-auto"
        max-width="300"
        to="/editor"
      >
        <v-img
          height="150px"
          src="~/assets/images/logo-small.png"
          cover
        />

        <v-card-item>
          <v-card-title>
            Top western road trips
          </v-card-title>
        </v-card-item>

        <v-card-item>
          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>
        </v-card-item>

        <v-divider />

        <v-card-actions>
          <v-spacer />

          <v-btn
            color="medium-emphasis"
            icon="mdi-heart"
            size="small"
          />

          <v-btn
            color="medium-emphasis"
            icon="mdi-bookmark"
            size="small"
          />

          <v-btn
            color="medium-emphasis"
            icon="mdi-share-variant"
            size="small"
          />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
