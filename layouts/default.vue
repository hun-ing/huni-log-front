<script setup lang="ts">
import TheNav from '~/layouts/the-nav.vue'
import TheHeader from '~/layouts/the-header.vue'

const drawer = ref(false)

const length = ref(3)
const tab = ref(null)
const isMounted = ref(false)
const amenities = ref([])

watch(length, val => tab.value = val - 1)

onMounted(() => {
  console.log('레이아웃 = ', isMounted.value)
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
              subtitle="기술 블로그"
              title="후니"
            >
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
          <v-card-item class="mt-15 mb-15">
            <v-chip-group
              v-model="amenities"
              column
              multiple
              class="custom-chip-group"
            >
              <v-chip
                v-for="n in 15" :key="n"
                text="Category"
                variant="outlined"
                filter
              />
            </v-chip-group>
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
