<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import TheNav from '~/layouts/the-nav.vue'
import TheHeader from '~/layouts/the-header.vue'

const items = ref([
  {
    title: 'Dashboard',
    disabled: false,
    href: 'breadcrumbs_dashboard',
  },
  {
    title: 'Link 1',
    disabled: false,
    href: 'breadcrumbs_link_1',
  },
  {
    title: 'Link 2',
    disabled: true,
    href: 'breadcrumbs_link_2',
  },
])

const route = useRoute()
</script>

<template>
  <TheNav />
  <TheHeader />

  <v-main>
    <v-container fluid>
      <v-card class="mb-3" variant="flat">
        <v-row justif="space-between" align="center">
          <v-col align-self="center">
            <p class="text-h5 font-weight-medium">
              타이틀 {{ route.meta }}
            </p>
          </v-col>
          <v-breadcrumbs :items="items">
            <template #divider>
              <v-icon icon="mdi-chevron-right" />
            </template>
          </v-breadcrumbs>
        </v-row>
      </v-card>
      <slot />
    </v-container>
  </v-main>
</template>
