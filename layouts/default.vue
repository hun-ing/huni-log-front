<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import TheNav from '~/layouts/the-nav.vue'
import TheHeader from '~/layouts/the-header.vue'

const drawer = ref(false)

const route = useRoute()
</script>

<template>
  <v-app>
    <TheNav v-model="drawer" />
    <TheHeader v-model="drawer" />

    <v-main>
      <v-container fluid>
        <v-card class="mb-3" variant="flat">
          <v-row justif="space-between" align="center">
            <v-col align-self="center">
              <p class="text-h5 font-weight-medium">
                타이틀 {{ route.meta }}
              </p>
            </v-col>
          </v-row>
        </v-card>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
