<script setup lang="ts">
const show = ref(false)
const drawer = ref(true)
const items = ref([
  { text: 'Sample Page', icon: 'mdi-home', to: '/' },
  { text: '메뉴 관리', icon: 'mdi-menu', to: '/menus' },
])

const test = ref(null)
function onClick() {
  console.log(test.value.$el)
}

const topPX = ref(0)

onActivated(() => {
  const rect = test.value.$el.getBoundingClientRect()
  topPX.value = rect.top
  console.log('rect = ', rect)
})
</script>

<template>
  <v-navigation-drawer v-model="drawer" class="position-fixed" :style="{ top: `${topPX}`, height: `fit-content` }" temporary disable-resize-watcher :scrim="false">
    <v-list :lines="false" density="compact">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        active-class="primary"
        @click="onClick"
      >
        <template #prepend>
          <v-icon :icon="item.icon" />
        </template>

        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-row ref="test">
    <v-col cols="4">
      <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-img
          height="150px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        />

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange-lighten-2"
            text="Explore"
          />

          <v-spacer />

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          />
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider />

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-img
          height="150px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        />

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange-lighten-2"
            text="Explore"
          />

          <v-spacer />

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          />
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider />

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-img
          height="150px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        />

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange-lighten-2"
            text="Explore"
          />

          <v-spacer />

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          />
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider />

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-img
          height="150px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        />

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange-lighten-2"
            text="Explore"
          />

          <v-spacer />

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          />
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider />

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-img
          height="150px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        />

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange-lighten-2"
            text="Explore"
          />

          <v-spacer />

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          />
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider />

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-img
          height="150px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        />

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange-lighten-2"
            text="Explore"
          />

          <v-spacer />

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          />
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider />

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-img
          height="150px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        />

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange-lighten-2"
            text="Explore"
          />

          <v-spacer />

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          />
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider />

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-img
          height="150px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        />

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange-lighten-2"
            text="Explore"
          />

          <v-spacer />

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          />
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider />

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-img
          height="150px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        />

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange-lighten-2"
            text="Explore"
          />

          <v-spacer />

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          />
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider />

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-img
          height="150px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        />

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange-lighten-2"
            text="Explore"
          />

          <v-spacer />

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          />
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider />

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-img
          height="150px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        />

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange-lighten-2"
            text="Explore"
          />

          <v-spacer />

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          />
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider />

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-img
          height="150px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        />

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange-lighten-2"
            text="Explore"
          />

          <v-spacer />

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          />
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider />

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-img
          height="150px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        />

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange-lighten-2"
            text="Explore"
          />

          <v-spacer />

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          />
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider />

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-img
          height="150px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        />

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange-lighten-2"
            text="Explore"
          />

          <v-spacer />

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          />
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider />

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>
