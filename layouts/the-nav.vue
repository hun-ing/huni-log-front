<script setup>
import { useTheme } from 'vuetify'
import logoLight from '~/assets/images/v-text-logo-light.png'
import logoDark from '~/assets/images/v-text-logo-dark.png'

const createStore = useCreateStore()
const drawer = ref(true)
const theme = useTheme()

const computedTheme = computed(() => {
  if (theme.name.value === 'light')
    return logoLight
  else
    return logoDark
})

const items = ref([
  { text: 'Sample Page', icon: 'mdi-home', to: '/' },
  { text: '메뉴 관리', icon: 'mdi-menu', to: '/menus' },
])
</script>

<template>
  <v-navigation-drawer v-model="drawer" :rail="createStore.getRail" permanent>
    <v-img v-if="!createStore.getRail" height="80" :src="computedTheme" />
    <v-img
      v-else
      height="80"
      src="~/assets/images/logo.svg"
    />

    <v-divider />

    <v-list :lines="false" density="compact" nav>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        link
        :to="item.to"
        active-class="primary"
      >
        <template #prepend>
          <v-icon :icon="item.icon" />
        </template>

        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
