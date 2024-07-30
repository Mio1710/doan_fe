import { ValidationObserver } from 'vee-validate'

declare module 'vue/types/vue' {
  interface $refs {
    observer: InstanceType<typeof ValidationObserver>
  }

  // this.$any inside Vue components
  interface Vue {}
}

declare module '@nuxt/types' {
  // context.app.$any inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {}

  // context.$any
  interface Context {}
}
