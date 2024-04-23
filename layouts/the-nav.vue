<script setup>
const createStore = useCreateStore()
const model = defineModel()
const items = ref([
])
</script>

<template>
  <v-navigation-drawer v-model="model" temporary>
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
