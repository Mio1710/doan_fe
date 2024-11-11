// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devServer: {
    // host: process.env.BASE_URL,
    port: 4000,
  },

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_API_URL,
      baseUrl: process.env.BASE_URL,
    },
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@sidebase/nuxt-auth',
    '@vee-validate/nuxt',
  ],

  plugins: ['~/plugins/axios.ts'],

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css'],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  auth: {
    isEnabled: true,
    globalAppMiddleware: true,
    disableServerSideAuth: false,
    baseURL: process.env.BASE_API_URL,
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: 'auth/login', method: 'post' },
        signOut: { path: 'auth/logout', method: 'post' },
        getSession: { path: 'auth/profile', method: 'get' },
      },
      token: {
        signInResponseTokenPointer: '/access_token',
        type: 'Bearer',
        cookieName: 'auth.token',
        headerName: 'Authorization',
        maxAgeInSeconds: 18000,
      },
      pages: {
        login: '/login',
      },
    },
  },

  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      styles: {
        configFile: '~/assets/scss/_variables.scss',
      },
    },
  },

  compatibilityDate: '2024-11-11',
})
