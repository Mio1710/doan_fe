<template>
  <label class="mb-0">
    <span>{{ label }}</span>
    <span v-if="!noColon">{{ $t('common.model.colon') }}</span>
  </label>
</template>

<script>
export default {
  name: 'AppLabel',
  props: {
    label: {
      type: String,
      required: true
    },
    noColon: {
      type: Boolean,
      default: false
    }
  }
}
</script>
