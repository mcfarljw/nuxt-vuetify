import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtConfig({
  css: [
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  devtools: {
    enabled: true
  },
  modules: ['../src/module'],
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi
        }
      },
      theme: {
        defaultTheme: 'dark',
      }
    }
  },
})
