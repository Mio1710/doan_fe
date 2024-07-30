<template>
  <validation-provider v-slot="{ errors }" :name="name || $attrs.label" :rules="rules" :vid="vid">
    <v-file-input
      v-model="innerValue"
      v-bind="$attrs"
      :dense="dense"
      :error-messages="errors"
      :hide-details="errors.length === 0 && !!!$attrs.hint"
      :hide-input="hideInput"
      :multiple="multiple"
      :outlined="outlined"
      :show-size="showSize"
      v-on="$listeners"
    >
      <template v-if="!!$attrs.label" slot="label">
        {{ $attrs.label }}
        <span v-if="isRequired" class="red--text">*</span>
      </template>
      <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />
    </v-file-input>
  </validation-provider>
</template>

<script>
import ControlMixin from '@/mixins/control'

export default {
  name: 'AppFileInput',
  mixins: [ControlMixin],
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    showSize: {
      type: Boolean,
      default: false
    },
    hideInput: {
      type: Boolean,
      default: false
    }
  }
}
</script>
