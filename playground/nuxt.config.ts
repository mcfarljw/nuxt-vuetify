export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  modules: ['../src/module'],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
      }
    }
  },
})
