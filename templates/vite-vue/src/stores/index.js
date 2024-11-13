import { defineStore } from 'pinia';
export const useRootStore = defineStore('root', {
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {},
  actions: {},
});
