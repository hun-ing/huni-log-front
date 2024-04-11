import { defineStore } from 'pinia'
import actions from '~/stores/actions.ts'
import getters from '~/stores/getters.ts'

export const useCreateStore = defineStore('createStore', {
  state: () => {
    return {
      rail: false,
    }
  },
  actions,
  getters,
})
