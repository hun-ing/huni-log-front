<script setup lang="ts">
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.custom-placeholder-color textarea::placeholder,
.custom-placeholder-color textarea {
  font-size: 2.125rem !important;
  font-weight: 600;
  line-height: 1.175;
  letter-spacing: 0.0073529412em !important;
  font-family: "Roboto", sans-serif;
  text-transform: none !important;
}

.toastui-editor-md-tab-container {
  display: none !important;
}

.toastui-editor-mode-switch {
  display: none !important;
}

.custom-chip-group .v-slide-group__content {
  justify-content: center;
  column-gap: 8px;
  row-gap: 8px;
}

* {
  cursor: url(/assets/images/duck-32px_1.cur) 20 30, auto;

}
</style>
