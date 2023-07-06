<template>
  <v-app>
    <v-main>
      <v-container class="pt-12">
        <v-row class="pb-8 text-center">
          <v-col :cols="12">
            <div class="text-h3">
              <v-icon icon="mdi-nuxt" />
              Nuxt Vuetify
              <v-icon icon="mdi-vuejs" />
            </div>
          </v-col>

          <v-col :cols="12">
            <div class="text-body-1">
              You are using the Nuxt module which provides support for Vuetify.
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="text-center">
            <v-btn
              href="https://github.com/mcfarljw/nuxt-vuetify"
              prepend-icon="mdi-github"
              size="large"
              target="_blank"
            >
              github
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

