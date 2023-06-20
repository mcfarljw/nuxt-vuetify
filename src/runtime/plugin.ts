import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()
  const vuetify = createVuetify(runtimeConfig.public.vuetify)

  nuxtApp.vueApp.use(vuetify)
})
