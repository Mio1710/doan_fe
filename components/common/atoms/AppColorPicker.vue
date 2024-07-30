<template>
  <v-menu
    ref="menu"
    absolute
    allow-overflow
    :close-on-content-click="false"
    max-width="290px"
    min-width="290px"
    offset-y
    top
    transition="scale-transition"
  >
    <template #activator="{ on, attrs }">
      <validation-provider v-slot="{ errors }" :name="name || $attrs.label" :rules="rules" :vid="vid">
        <v-text-field
          v-bind="{ ...attrs, ...$attrs }"
          append-icon="mdi-palette"
          class="color-picker"
          :clearable="clearable"
          :dense="dense"
          :error-messages="errors"
          :hide-details="errors.length === 0 && !!!$attrs.hint"
          :outlined="outlined"
          readonly
          :value="innerValue"
          v-on="on"
        >
          <template v-if="!!$attrs.label" slot="label">
            {{ $attrs.label }}
            <span v-if="isRequired" class="red--text">*</span>
          </template>
          <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />
        </v-text-field>
      </validation-provider>
    </template>
    <v-color-picker v-model="innerValue" show-swatches swatches-max-height="200" />
  </v-menu>
</template>

<script>
import ControlMixin from '@/mixins/control'

export default {
  name: 'AppColorPicker',
  mixins: [ControlMixin],
  props: {
    clearable: {
      type: Boolean,
      default: false
    }
  }
}
</script>
