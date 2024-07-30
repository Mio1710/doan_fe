<template>
  <v-edit-dialog
    v-bind="$attrs"
    :cancel-text="$t('common.action.cancel')"
    :save-text="$t('common.action.save')"
    v-on="$listeners"
  >
    <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />
  </v-edit-dialog>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppEditDialog',
  props: {
    value: Boolean
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
