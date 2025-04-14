import { createApp } from 'vue'

import '~/app/index.css'
import { App, router, setupPiniaPlugin, setupVueQueryPlugin } from '~/app'

const app = createApp(App)
setupVueQueryPlugin(app)
setupPiniaPlugin(app)
app.use(router)
app.mount('#app')
