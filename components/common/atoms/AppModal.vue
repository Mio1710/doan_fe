<template>
  <vue-final-modal
    v-bind="$attrs"
    classes="v-dialog__content"
    :content-class="['v-dialog', { 'v-dialog--fullscreen': isFullscreen }]"
    :content-style="contentStyle"
    v-on="$listeners"
  >
    <slot />
  </vue-final-modal>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppModal',
  inheritAttrs: false,
  props: {
    fullscreen: {
      type: Boolean,
      default: undefined
    },
    width: {
      type: String,
      default: null
    }
  },
  computed: {
    isFullscreen() {
      if (this.fullscreen !== undefined) {
        return this.fullscreen
      }

      return this.$vuetify.breakpoint.mdAndDown
    },
    contentStyle() {
      if (this.isFullscreen) {
        return {
          width: '100%'
        }
      }

      return {
        width: this.width
      }
    }
  }
})
</script>
