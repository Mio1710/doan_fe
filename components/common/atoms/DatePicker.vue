<template>
  <vue-date-picker
    v-model="innerValue"
    color="#2B83BF"
    :format="formatter"
    fullscreen-mobile
    :locale="locale"
    :max-date="maxTwoDate"
    :min-date="minDate"
    :name="`Select ${typer}`"
    no-header
    :type="typer"
  >
    <template #activator="{ date }">
      <validation-provider v-slot="{ errors }" :name="name || $attrs.label" :rules="rules" :vid="vid">
        <v-text-field
          v-bind="$attrs"
          append-icon="mdi-menu-down"
          class="input-picker"
          :class="`${typer}-picker`"
          :clearable="clearable"
          dense
          :error-messages="errors"
          :hide-details="errors.length === 0 && !!!$attrs.hint"
          :outlined="outlined"
          readonly
          :value="date"
        >
          <template v-if="!!$attrs.label" slot="label">
            {{ $attrs.label }}
            <span v-if="isRequired" class="red--text">*</span>
          </template>
          <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />
        </v-text-field>
      </validation-provider>
    </template>
  </vue-date-picker>
</template>

<script>
import { VueDatePicker } from '@mathieustan/vue-datepicker'
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css'
import ControlMixin from '@/mixins/control'

export default {
  name: 'DatePicker',
  components: {
    VueDatePicker
  },
  mixins: [ControlMixin],
  props: {
    maxDate: {
      type: String,
      default: null
    },
    minDate: {
      type: String,
      default: '2000-01-01'
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
      default: 'DD/MM/YYYY'
    },
    locale: {
      type: Object,
      default: () => ({
        lang: 'en'
      })
    }
  },
  data() {
    return {
      maxTwoDate: this.$moment().add(3, 'year').endOf('year').format('YYYY-MM-DD')
    }
  },
  computed: {
    formatter() {
      switch (this.type) {
        case 'month':
          return 'MM/YYYY'
        case 'year':
          return 'YYYY'
        case 'quarter':
          return ''
        default:
          return this.format
      }
    },
    typer() {
      switch (this.type) {
        case 'month':
          return 'month'
        case 'year':
          return 'year'
        case 'quarter':
          return 'quarter'
        default:
          return 'date'
      }
    }
  }
}
</script>

<style lang="scss">
.input-picker {
  input {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }
}
.vd-activator {
  display: block;
}

.vd-picker__years {
  height: 200px;
}
.v-application ul,
.v-application ol {
  padding-left: 0;
}
</style>
