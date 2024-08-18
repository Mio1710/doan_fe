<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: 'text',
  },
  rules: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    required: false,
  },
})
const value = defineModel()
</script>

<template>
  <VeeField v-slot="{ errorMessage }" v-model="value" :name="props.name" :rules="props.rules">
    <v-text-field
      v-model="value"
      :error-messages="errorMessage"
      :label="props.name"
      :name="props.name"
      :type="props.type"
    />
  </VeeField>
</template>

<style scoped></style>
