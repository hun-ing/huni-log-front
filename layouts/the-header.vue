<script setup>
const createStore = useCreateStore()
</script>

<template>
  <v-app-bar
    color="primary"
    height="80"
  >
    <v-app-bar-nav-icon variant="text" @click.stop="createStore.toggleRail" />
    <v-spacer />
  </v-app-bar>
</template>
