<script setup>
import CommentCard from '~/components/layouts/CommentCard.vue'

defineProps(['comments'])
</script>

<template>
  <CommentCard v-for="comment in comments" :comment />
</template>

<style scoped>
</style>
