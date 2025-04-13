import { createApp } from 'vue'

import '~/app/index.css'
import { App, router, vueQueryPlugin } from '~/app'

const app = createApp(App)
vueQueryPlugin(app)
app.use(router)
app.mount('#app')
