<script setup>
</script>

<template>
  <v-row justify="end" class="pa-5 bg-grey-lighten-4">
    <v-col cols="12">
      <v-textarea
        row-height="15"
        rows="3"
        class="bg-white"
        variant="outlined"
        auto-grow
        no-resize
        placeholder="댓글을 작성하세요"
        hide-details
      />
    </v-col>
    <v-col cols="auto">
      <v-btn variant="elevated" color="deep-purple-lighten-2">
        댓글 작성
      </v-btn>
    </v-col>
  </v-row>
</template>

<style scoped>
</style>
