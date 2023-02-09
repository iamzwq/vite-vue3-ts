import { defineStore } from 'pinia'

const useCounterStore = defineStore('counterStore', {
  state() {
    return {
      counter: 0,
    }
  },
  getters: {
    doubleCount: state => state.counter * 2,
  }
})

export default useCounterStore
