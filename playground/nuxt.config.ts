export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  modules: ['../src/module'],
  vuetify: {
    theme: {
      defaultTheme: 'dark',
    }
  },
})
