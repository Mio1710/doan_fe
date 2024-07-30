<template>
  <validation-provider v-slot="{ errors }" :name="name || $attrs.label" :rules="rules" :vid="vid">
    <v-phone-input
      v-model="innerValue"
      v-bind="$attrs"
      :country-label="countryLabel"
      :country-props="{ hideDetails: true }"
      :default-country="defaultCountry"
      :dense="dense"
      :error-messages="errors"
      hide-details="auto"
      :invalid-message="$t('common.message.phoneInvalid', { _example_: '01 23 45 67 89' })"
      :only-countries="onlyCountries"
      :outlined="outlined"
      v-on="$listeners"
    >
      <template v-if="!!$attrs.label" slot="label">
        {{ $attrs.label }}
        <span v-if="isRequired" class="red--text">*</span>
      </template>
      <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />
    </v-phone-input>
  </validation-provider>
</template>

<script>
import ControlMixin from '@/mixins/control'

export default {
  name: 'AppPhone',
  mixins: [ControlMixin],
  props: {
    onlyCountries: {
      type: Array,
      default: () => ['VN']
    },
    defaultCountry: {
      type: String,
      default: 'VN'
    },
    countryLabel: {
      type: String,
      default: null
    }
  }
}
</script>
