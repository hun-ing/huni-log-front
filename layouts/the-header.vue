<script setup>
const model = defineModel()

const fav = ref(true)
const menu = ref(false)
const message = ref(false)
const hints = ref(true)
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
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          location="bottom"
        >
          <template #activator="{ props }">
            <v-btn
              class="font-weight-regular" variant="elevated"
              v-bind="props"
            >
              로그인
            </v-btn>
          </template>

          <v-card min-width="300">
            <v-list>
              <v-list-item
                prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
                subtitle="Founder of Vuetify"
                title="John Leider"
              >
                <template #append>
                  <v-btn
                    :class="fav ? 'text-red' : ''"
                    icon="mdi-heart"
                    variant="text"
                    @click="fav = !fav"
                  />
                </template>
              </v-list-item>
            </v-list>

            <v-divider />

            <v-list>
              <v-list-item>
                <v-switch
                  v-model="message"
                  color="purple"
                  label="Enable messages"
                  hide-details
                />
              </v-list-item>

              <v-list-item>
                <v-switch
                  v-model="hints"
                  color="purple"
                  label="Enable hints"
                  hide-details
                />
              </v-list-item>
            </v-list>

            <v-card-actions>
              <v-spacer />

              <v-btn
                variant="text"
                @click="menu = false"
              >
                Cancel
              </v-btn>
              <v-btn
                color="primary"
                variant="text"
                @click="menu = false"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
    </template>
  </v-toolbar>
</template>
