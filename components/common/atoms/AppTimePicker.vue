<template>
  <v-menu
    ref="menu"
    absolute
    :close-on-content-click="false"
    max-width="290px"
    min-width="290px"
    offset-y
    transition="scale-transition"
  >
    <template #activator="{ on, attrs }">
      <validation-provider v-slot="{ errors }" :name="name || $attrs.label" :rules="rules" :vid="vid">
        <v-text-field
          v-bind="{ ...attrs, ...$attrs }"
          v-model="innerValue"
          append-icon="mdi-calendar-blank-outline"
          :clearable="clearable"
          :dense="dense"
          :error-messages="errors"
          :hide-details="errors.length === 0 && !!!$attrs.hint"
          :outlined="outlined"
          readonly
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
    <v-time-picker v-model="innerValue" no-title @click:minute="$refs.menu.save(innerValue)" />
  </v-menu>
</template>

<script>
import ControlMixin from '@/mixins/control'

export default {
  name: 'AppTimePicker',
  mixins: [ControlMixin],
  props: {
    clearable: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: 'ampm'
    }
  }
}
</script>
