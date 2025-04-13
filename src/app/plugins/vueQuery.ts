import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import type { App } from 'vue'

const queryClient = new QueryClient()

const vueQueryPlugin = (app: App) => {
  app.use(VueQueryPlugin, { queryClient })
}

export { vueQueryPlugin }
