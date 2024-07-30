<template>
  <validation-provider v-slot="{ errors }" :name="name || $attrs.label" :rules="rules" :vid="vid">
    <v-text-field
      ref="appTextField"
      v-model="innerValue"
      v-bind="$attrs"
      :dense="dense"
      :error-messages="!inlineError ? errors : []"
      :hide-details="!inlineError ? errors.length === 0 && !!!$attrs.hint : true"
      :outlined="outlined"
      v-on="$listeners"
      @click:clear="$emit('clear')"
      @keydown.space="(event) => keyDownSpace(event)"
      @paste="handlePaste"
    >
      <template v-if="!!$attrs.label" slot="label">
        {{ $attrs.label }}
        <span v-if="isRequired" class="red--text">*</span>
      </template>
      <template v-if="inlineError" slot="append">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon v-show="errors[0]" color="error" v-bind="attrs" v-on="on">mdi-alert-decagram-outline</v-icon>
          </template>
          <span>
            {{ errors[0] }}
          </span>
        </v-tooltip>
      </template>
      <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />
    </v-text-field>
  </validation-provider>
</template>

<script>
import ControlMixin from '@/mixins/control'

export default {
  name: 'AppTextField',
  mixins: [ControlMixin],
  props: {
    inlineError: {
      type: Boolean,
      default: false
    }
  }
}
</script>
