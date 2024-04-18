<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import TheNav from '~/layouts/the-nav.vue'
import TheHeader from '~/layouts/the-header.vue'

const drawer = ref(false)

const route = useRoute()

const length = ref(3)
const tab = ref(null)

watch(length, val => tab.value = val - 1)
</script>

<template>
  <v-app class="ms-20 me-20">
    <TheNav v-model="drawer" />
    <TheHeader v-model="drawer" />

    <v-main>
      <v-container fluid class="h-100 justify-center align-center bg-amber">
        <v-card class="bg-blue h-100 v-col-6 ma-auto" variant="flat">
          <div class="bg-deep-orange">
            <v-card
              append-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
              class="mx-auto"
              prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
              subtitle="prepend-avatar and append-avatar"
              title="Avatars"
            >
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
            </v-card>
          </div>
          <div>
            <v-tabs
              v-model="tab"
              align-tabs="center"
            >
              <v-tab
                v-for="n in length"
                :key="n"
                :value="n"
              >
                Item {{ n }}
              </v-tab>
            </v-tabs>
          </div>
          <div class="bg-deep-orange-accent-2">
            <v-window v-model="tab">
              <v-window-item
                v-for="item in length"
                :key="item"
                :value="item"
              >
                <v-card
                  color="basil"
                  flat
                >
                  <v-card-text>
                    <slot />
                  </v-card-text>
                </v-card>
              </v-window-item>
            </v-window>
          </div>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
