<template>
  <v-menu
    ref="menu"
    :close-on-content-click="false"
    :disabled="$attrs.readonly"
    max-width="290px"
    min-width="290px"
    offset-y
    transition="scale-transition"
  >
    <template #activator="{ on, attrs }">
      <validation-provider
        v-slot="{ errors }"
        :mode="interactionMode"
        :name="name || $attrs.label"
        :rules="rules"
        :vid="vid"
      >
        <component
          :is="component"
          v-bind="{ ...attrs, ...$attrs }"
          v-model="innerValue"
          append-icon="mdi-calendar-blank-outline"
          :clearable="clearable"
          :dense="dense"
          :error-messages="errors"
          :hide-details="errors.length === 0 && !!!$attrs.hint"
          :outlined="outlined"
          readonly
          :value="innerValue | formatDate(displayFormatter)"
          v-on="on"
          @click:append="openMenu"
          @click:clear="$emit('clear')"
        >
          <template v-if="!!$attrs.label" slot="label">
            {{ $attrs.label }}
            <span v-if="isRequired" class="red--text">*</span>
          </template>
          <template>
            <v-icon>mdi-calendar-blank-outline</v-icon>
          </template>
          <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />
        </component>
      </validation-provider>
    </template>
    <v-date-picker
      v-model="innerValue"
      :max="maxDate"
      :min="minDate"
      :multiple="multiple"
      no-title
      :type="type"
      @change="save"
    />
  </v-menu>
</template>

<script>
import { VCombobox, VTextField } from 'vuetify/lib'
import ControlMixin from '@/mixins/control'

export default {
  name: 'AppDatePicker',
  mixins: [ControlMixin],
  props: {
    maxDate: {
      type: String,
      default: null
    },
    minDate: {
      type: String,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'date'
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    displayFormat: {
      type: String,
      default: 'DD/MM/YYYY'
    }
  },
  computed: {
    component() {
      return this.multiple ? VCombobox : VTextField
    },
    formatter() {
      return this.type === 'month' ? 'YYYY-MM' : this.format
    },
    displayFormatter() {
      return this.type === 'month' ? 'MM/YYYY' : this.displayFormat
    }
  },
  methods: {
    save(date) {
      this.innerValue = this.$moment(date).format(this.formatter)
      this.$refs.menu.save(date)
      this.$emit('change')
    },
    openMenu() {
      this.$refs.menu.isActive = true
    }
  }
}
</script>
