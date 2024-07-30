<template>
  <validation-provider
    v-slot="{ errors }"
    :mode="interactionMode"
    :name="name || $attrs.label"
    :rules="rules"
    :vid="vid"
  >
    <v-currency-field
      v-model="innerValue"
      v-bind="$attrs"
      :dense="dense"
      :error-messages="errors"
      :hide-details="errors.length === 0 && !!!$attrs.hint"
      :outlined="outlined"
      :prefix="prefix"
      :suffix="suffix"
      v-on="$listeners"
    >
      <template v-if="!!$attrs.label" slot="label">
        {{ $attrs.label }}
        <span v-if="isRequired" class="red--text">*</span>
      </template>
      <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />
    </v-currency-field>
  </validation-provider>
</template>

<script>
import ControlMixin from '@/mixins/control'

export default {
  name: 'AppCurrency',
  mixins: [ControlMixin],
  props: {
    prefix: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: '₫'
    }
  }
}
</script>
