import { defineNuxtModule, addPlugin, createResolver, extendViteConfig } from '@nuxt/kit'
import { defu } from 'defu'
import vuetify from 'vite-plugin-vuetify'
import { VuetifyOptions } from 'vuetify'

export default defineNuxtModule<VuetifyOptions>({
  meta: {
    name: '@mcfarljw/nuxt-vuetify',
    configKey: 'vuetify',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {},
  hooks: {},
  async setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)
    const pluginPath = resolver.resolve('./runtime/plugin')

    nuxt.options.runtimeConfig.public.vuetify = defu(nuxt.options.runtimeConfig.public.vuetify, options)

    nuxt.options.build.transpile.push('vuetify')

    nuxt.options.css.push('vuetify/styles')

    extendViteConfig((config) => {
      config.plugins?.push(vuetify())
    })

    addPlugin(pluginPath)
  }
})
