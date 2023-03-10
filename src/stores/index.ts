import { toRaw } from 'vue'
import { createPinia, type PiniaPluginContext } from 'pinia'
import { getLocalStorage, setLocalStorage } from '@/utils/storage'

const sessionKey = 'session'

type Options = {
  key: string
}

const sessionPiniaPlugin = (options: Options) => {
  return (context: PiniaPluginContext) => {
    const { store } = context

    const data = JSON.parse(getLocalStorage(sessionKey) || '{}')

    store.$subscribe(() => {
      if (store.$id === sessionKey) {
        setLocalStorage(sessionKey, JSON.stringify(toRaw(store.$state)))
      }
    })

    return { ...data }
  }
}

const pinia = createPinia()

pinia.use(
  sessionPiniaPlugin({
    key: sessionKey,
  })
)

export default pinia
