<template>
  <div class="v-date-range">
    <v-menu v-model="menu" :close-on-content-click="false" offset-y v-bind="menuProps">
      <template #activator="{ on, attrs }">
        <v-text-field
          v-bind="{ ...attrs, ...inputProps }"
          class="v-date-range__input-field"
          :disabled="disabled"
          :label="label"
          readonly
          :value="inputValue"
          v-on="on"
        />
      </template>
      <v-card class="v-date-range__menu-content">
        <v-card-text class="pa-0">
          <div
            :class="{
              'v-date-range__pickers': true,
              'v-date-range--highlighted': highlightDates.length
            }"
            :data-days="highlightDates.length"
          >
            <v-card-title v-if="$slots.title">
              <slot v-if="$slots.title" name="title" />
            </v-card-title>
            <v-card-text>
              <div class="v-date-range__content">
                <v-list v-if="presets.length" dense>
                  <v-subheader>{{ presetLabel }}</v-subheader>
                  <v-list-item
                    v-for="(preset, index) in presets"
                    :key="index"
                    v-model="isPresetActive[index]"
                    dense
                    @click="selectPreset(index)"
                  >
                    <v-list-item-content>
                      {{ preset.label }}
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-divider vertical />
                <v-date-picker
                  v-model="pickerStart"
                  class="v-date-range__picker--start v-date-range__picker"
                  :event-color="highlightClasses"
                  :events="highlightDates"
                  :first-day-of-week="firstDayOfWeek"
                  :locale="locale"
                  :max="pickerEnd || max"
                  :min="min"
                  :next-icon="nextIcon"
                  :no-title="noTitle"
                  :prev-icon="prevIcon"
                />
                <v-date-picker
                  v-model="pickerEnd"
                  class="v-date-range__picker--end v-date-range__picker"
                  :event-color="highlightClasses"
                  :events="highlightDates"
                  :first-day-of-week="firstDayOfWeek"
                  :locale="locale"
                  :max="max"
                  :min="pickerStart || min"
                  :next-icon="nextIcon"
                  :no-title="noTitle"
                  :prev-icon="prevIcon"
                />
              </div>
            </v-card-text>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn v-if="showReset" text @click="reset">{{ mergedActionLabels.reset }}</v-btn>
          <v-btn text @click="menu = false">{{ mergedActionLabels.cancel }}</v-btn>
          <v-btn color="primary" :disabled="!bothSelected" @click="applyRange">{{ mergedActionLabels.apply }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { format, parse, differenceInCalendarDays, addDays } from 'date-fns'
export const ISO_FORMAT = 'yyyy-MM-dd'
export const DEFAULT_DATE = format(new Date(), ISO_FORMAT)
export const DEFAULT_ACTION_LABELS = {
  apply: 'Apply',
  cancel: 'Cancel',
  reset: 'Reset'
}

export default {
  name: 'AppDateRange',
  props: {
    // Take start and end as the input. Passable via v-model.
    value: {
      type: Array,
      default: () => [DEFAULT_DATE, DEFAULT_DATE]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    presets: {
      type: Array,
      default: () => []
    },
    // Denotes the Placeholder string for start date.
    startLabel: {
      type: String,
      default: 'Start Date'
    },
    // Denotes the Placeholder string for start date.
    endLabel: {
      type: String,
      default: 'End Date'
    },
    // The string that gets placed between `startLabel` and `endLabel`
    separatorLabel: {
      type: String,
      default: '~'
    },
    presetLabel: {
      type: String,
      default: 'Presets'
    },
    actionLabels: {
      type: Object,
      default: () => DEFAULT_ACTION_LABELS
    },
    /**
     * Following values are all passable to vuetify's own datepicker
     * component.
     */
    // Min selectable date.
    min: {
      type: String,
      default: undefined
    },
    // Max selectable date
    max: {
      type: String,
      default: undefined
    },
    // Locale
    locale: {
      type: String,
      default: 'en-us'
    },
    firstDayOfWeek: {
      type: [String, Number],
      default: 0
    },
    noTitle: {
      type: Boolean,
      default: false
    },
    displayFormat: {
      type: String,
      default: 'dd/MM/yyyy'
    },
    highlightColor: {
      type: String,
      default: 'blue lighten-5'
    },
    showReset: {
      type: Boolean,
      default: true
    },
    /**
     * Icons
     */
    nextIcon: {
      type: String,
      default: '$vuetify.icons.next'
    },
    prevIcon: {
      type: String,
      default: '$vuetify.icons.prev'
    },
    inputProps: {
      type: Object,
      default: () => ({
        appendIcon: 'mdi-calendar',
        dense: true,
        hideDetails: 'auto',
        outlined: true
      })
    },
    menuProps: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      menu: false,
      pickerStart: this.value[0],
      pickerEnd: this.value[1],
      highlightDates: [],
      highlightClasses: {}
    }
  },
  computed: {
    inputValue() {
      if (this.isValueEmpty) {
        return ''
      }
      const start = this.displayFormat ? this.formatDate(this.value[0], this.displayFormat) : this.value[0]
      const end = this.displayFormat ? this.formatDate(this.value[1], this.displayFormat) : this.value[1]
      return `${start}  ${this.separatorLabel}  ${end}`
    },
    label() {
      return `${this.startLabel}  ${this.separatorLabel}  ${this.endLabel}`
    },
    /**
     * If the value prop doesn't have any start value,
     * its most likely that an empty object was passed.
     */
    isValueEmpty() {
      return !this.value[0]
    },
    /**
     * If the user has selected both the dates or not
     */
    bothSelected() {
      return this.pickerStart && this.pickerEnd
    },
    isPresetActive() {
      return this.presets.map((preset) => preset.range[0] === this.pickerStart && preset.range[1] === this.pickerEnd)
    },
    mergedActionLabels() {
      return { ...DEFAULT_ACTION_LABELS, ...this.actionLabels }
    }
  },
  watch: {
    // Watching to see if the menu is closed.
    menu(isOpen) {
      if (!isOpen) {
        this.closeMenu()
      } else {
        this.highlight()
      }
    },
    pickerStart: 'highlight',
    pickerEnd: 'highlight'
  },
  methods: {
    /**
     * Emit the input event with the updated range data.
     * This makes v-model work.
     */
    applyRange() {
      this.menu = false
      this.emitRange()
    },
    /**
     * Called every time the menu is closed.
     * It also emits an event to tell the parent
     * that the menu has closed.
     *
     * Upon closing the datepicker values are set
     * to the current selected value.
     */
    closeMenu() {
      // Reset the changed values for datepicker models.
      this.pickerStart = this.value[0]
      this.pickerEnd = this.value[1]
      this.highlight()
      this.$emit('menu-closed')
    },
    formatDate(date, fmt) {
      return format(parse(date, ISO_FORMAT, new Date()), fmt)
    },
    highlight() {
      if (!this.bothSelected) {
        return
      }
      const dates = []
      const classes = {}
      const start = parse(this.pickerStart, ISO_FORMAT, new Date())
      const end = parse(this.pickerEnd, ISO_FORMAT, new Date())
      const diff = Math.abs(differenceInCalendarDays(start, end))

      // Loop though all the days in range.
      for (let i = 0; i <= diff; i++) {
        const date = format(addDays(start, i), ISO_FORMAT)
        dates.push(date)
        const classesArr = []
        classesArr.push('v-date-range__in-range')
        classesArr.push(this.highlightColor)
        i === 0 && classesArr.push('v-date-range__range-start')
        i === diff && classesArr.push('v-date-range__range-end')
        classes[date] = classesArr.join(' ')
      }
      this.highlightDates = dates
      this.highlightClasses = classes
    },
    selectPreset(presetIndex) {
      this.pickerStart = this.presets[presetIndex].range[0]
      this.pickerEnd = this.presets[presetIndex].range[1]
    },
    reset() {
      // Reset Picker Values
      this.pickerStart = ''
      this.pickerEnd = ''
      this.highlightDates = []
      this.highlightClasses = {}
      this.emitRange()
    },
    emitRange() {
      this.$emit('input', this.pickerStart !== '' && this.pickerEnd !== '' ? [this.pickerStart, this.pickerEnd] : [])
      this.$emit('change')
    }
  }
}
</script>

<style lang="scss" scoped>
.v-date-range__content {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
  & > {
    & > {
      & > .v-date-picker-table {
        .v-btn {
          border-radius: 0;
        }
      }
    }
  }
}
.v-date-range__pickers {
  & > {
    & > {
      & > .v-date-picker-table__events {
        height: 100%;
        width: 100%;
        top: 0;
        z-index: -1;
      }
      & > .v-date-picker-table {
        table {
          width: auto;
          margin: auto;
          border-collapse: collapse;
          td {
            .v-btn {
              &.v-btn--outline {
                border: none;
                box-shadow: 0 0 0 1px currentColor inset;
              }
              &.v-btn--active {
                &::before {
                  background-color: transparent !important;
                }
              }
            }
          }
        }
      }
      & > .v-date-range__in-range {
        height: 100%;
        width: 100%;
        margin: 0;
        border-radius: 0;
      }
    }
  }
}
.v-date-range__pickers >>> .v-date-picker-table table th,
.v-date-range__pickers >>> .v-date-picker-table table td {
  height: 32px;
  width: 32px;
}
</style>
