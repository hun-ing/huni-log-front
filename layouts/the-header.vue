<script setup>
const model = defineModel()
</script>

<template>
  <v-toolbar color="white">
    <template #prepend>
      <nuxt-link to="/">
        <v-img
          src="~/assets/images/logo.png" width="180"
        />
      </nuxt-link>
      <v-btn class="text-disabled text-medium-emphasis text-body-2 text-capitalize px-3 app-btn ms-5">
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

    <template #append>
      <v-btn class="text-none text-medium-emphasis text-body-2 text-capitalize px-3 app-btn me-n2">
        <v-badge color="error" content="2">
          <v-icon size="x-large">
            mdi-bell-outline
          </v-icon>
        </v-badge>
      </v-btn>

      <v-divider vertical length="18" class="mx-2 my-auto ms-3 me-2" />

      <div class="text-none text-medium-emphasis text-body-2 text-capitalize px-3 app-btn me-n2">
        <v-btn class="font-weight-regular" variant="elevated" to="/editor">
          새 글 작성
        </v-btn>
      </div>

      <v-divider vertical length="18" class="mx-2 my-auto ms-3 me-2" />

      <div class="text-none text-medium-emphasis text-body-2 text-capitalize px-3 app-btn me-n2">
        <v-btn class="font-weight-regular" variant="elevated">
          로그인
        </v-btn>
      </div>
    </template>
  </v-toolbar>
</template>
