<script setup>
const createStore = useCreateStore()
const model = defineModel()
</script>

<template>
  <!--  <v-app-bar
    color="primary"
    height="80"
  >
    <v-app-bar-nav-icon variant="text" @click.stop="createStore.toggleRail" />
    <v-spacer />
  </v-app-bar> -->

  <v-toolbar color="white" border>
    <template #prepend>
      <nuxt-link to="/">
        <v-img
          src="~/assets/images/v-text-logo-light.png" width="128" height="30"
        />
      </nuxt-link>
      <v-btn prepend-icon="mdi-magnify">
        <template #default>
          Search
        </template>
      </v-btn>
    </template>

    <v-app-bar-nav-icon class="d-flex d-sm-none" @click.stop="model = !model" />

    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-export</v-icon>
    </v-btn>
  </v-toolbar>
</template>
