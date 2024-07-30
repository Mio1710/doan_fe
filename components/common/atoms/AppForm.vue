<template>
  <validation-observer ref="observer" v-slot="scopedSlots" slim>
    <v-form>
      <slot v-bind="scopedSlots" />
    </v-form>
  </validation-observer>
</template>

<script>
import { convertErrorsToVeeValidate } from '@/utils/convert-errors-to-vee-validate'

export default {
  name: 'AppForm',
  created() {
    this.subscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'form/VALIDATION_ERRORS') {
        const errors = convertErrorsToVeeValidate(state.form.validationErrors)
        this.$refs.observer.setErrors(errors)
      }
    })
  },
  beforeDestroy() {
    this.subscribe()
  },
  methods: {
    handleReset() {
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    }
  }
}
</script>
