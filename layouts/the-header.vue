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
      <v-btn class="text-disabled text-medium-emphasis text-body-2 text-capitalize px-3 app-btn">
        <template #prepend>
          <v-icon>mdi-magnify</v-icon>
        </template>
        <template #default>
          <span class="d-none d-md-flex align-center ">
            <span>Search</span>
            <span class="py-1 px-2 ms-2 border rounded text-caption">Ctrl+K</span>
          </span>
        </template>
      </v-btn>
    </template>

    <v-app-bar-nav-icon class="d-flex d-sm-none" @click.stop="model = !model" />

    <v-toolbar-items>
      <v-btn variant="text">
        News
      </v-btn>

      <v-divider vertical length="18" class="mx-2 my-auto ms-3 me-2" />

      <v-btn variant="text">
        Blog
      </v-btn>

      <v-divider vertical length="18" class="mx-2 my-auto ms-3 me-2" />

      <v-btn variant="text">
        Music
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
