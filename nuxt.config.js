export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  publicRuntimeConfig: {
    appName: process.env.APP_NAME,
    apiUrl: process.env.API_URL
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - PTUD_FE',
    title: 'PTUD_FE',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/theme.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vee-validate',
    '@/plugins/axios',
    '@/plugins/vue-query',
    '@/plugins/api',
    '@/plugins/vue-currency-filter',
    // filters
    '@/plugins/filters/format-date',
    '@/plugins/filters/sale-order-status',
    '@/plugins/filters/currency',
    '@/plugins/filters/user',
    '@/plugins/filters/company-status'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  router: {
    middleware: ['auth']
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/moment'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'vuetify-dialog/nuxt',
    'nuxt-socket-io',
    [
      'v-currency-field/nuxt-treeshaking',
      {
        locale: 'vi',
        decimalLength: 0,
        autoDecimalMode: false,
        min: null,
        max: null,
        defaultValue: 0,
        valueAsInteger: false,
        allowNegative: true
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/login'
          },
          logout: {
            url: '/auth/logout'
          },
          user: {
            url: '/auth/user'
          }
        },
        token: {
          property: 'token'
        },
        user: {
          property: 'user'
        }
      }
    }
  },
  moment: {
    locales: ['vi'],
    defaultLocale: 'vi',
    plugins: ['moment-range']
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['@/assets/variables.scss'],
    optionsPath: '@/configs/vuetify.js',
    treeShake: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  io: {},
  nitro: {
    experimental: {
      websocket: true
    }
  }
}
