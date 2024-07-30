<template>
  <validation-provider v-slot="{ errors }" :name="name || $attrs.label" :rules="rules" :vid="vid">
    <v-text-field
      v-model="innerValue"
      v-bind="$attrs"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :dense="dense"
      :error-messages="errors"
      :hide-details="errors.length === 0 && !!!$attrs.hint"
      :outlined="outlined"
      :type="show ? 'text' : 'password'"
      v-on="$listeners"
      @click:append="show = !show"
    >
      <template v-if="!!$attrs.label" slot="label">
        {{ $attrs.label }}
        <span v-if="isRequired" class="red--text">*</span>
      </template>
      <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />
    </v-text-field>
  </validation-provider>
</template>

<script>
import ControlMixin from '@/mixins/control'

export default {
  name: 'AppPassword',
  mixins: [ControlMixin],
  data() {
    return {
      show: false
    }
  }
}
</script>
