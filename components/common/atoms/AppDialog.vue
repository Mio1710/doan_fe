<template>
  <v-dialog v-model="dialog" :persistent="persistent" scrollable :width="width">
    <slot />
  </v-dialog>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    persistent: {
      type: Boolean,
      default: true
    },
    width: {
      type: [String, Number],
      default: 'auto'
    }
  },
  setup(props, { emit }) {
    const dialog = computed({
      get: () => props.value,
      set: (val) => emit('input', val)
    })

    return {
      dialog
    }
  }
})
</script>
