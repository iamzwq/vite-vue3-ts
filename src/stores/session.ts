import {defineStore} from "pinia"

const useSessionStore = defineStore('session', {
  state: () => {
    return {
      name: '',
      email: '',
      token: ''
    }
  }
})

export default useSessionStore