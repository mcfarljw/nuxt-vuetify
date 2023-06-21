import { defineNuxtModule, addPlugin, createResolver, extendViteConfig } from '@nuxt/kit'
import { defu } from 'defu'
import vuetify from 'vite-plugin-vuetify'
import { VuetifyOptions } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

interface ModuleOptions {
  vuetifyOptions?: VuetifyOptions
}

export default defineNuxtModule<ModuleOptions>({
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
    const vuetifyOptions = defu(options.vuetifyOptions, {
      icons: {
        aliases,
        defaultSet: 'mdi',
        sets: {
          mdi
        }
      }
    })

    nuxt.options.runtimeConfig.public.vuetify = defu(nuxt.options.runtimeConfig.public.vuetify, vuetifyOptions)

    nuxt.options.build.transpile.push('vuetify')

    nuxt.options.css.push('vuetify/styles')

    if (vuetifyOptions.icons.defaultSet === 'mdi') {
      nuxt.options.css.push('@mdi/font/css/materialdesignicons.min.css')
    }

    extendViteConfig((config) => {
      config.plugins?.push(vuetify())
    })

    addPlugin(pluginPath)
  }
})
