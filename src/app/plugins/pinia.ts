import { createPinia } from 'pinia'
import type { App } from 'vue'

const setupPiniaPlugin = (app: App) => {
  const pinia = createPinia()
  app.use(pinia)
}

export { setupPiniaPlugin }
