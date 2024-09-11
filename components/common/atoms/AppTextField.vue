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
  <div>
    <VeeField v-slot="{ errorMessage }" v-model="value" :name="props.name" :rules="props.rules">
      <v-text-field
        v-model="value"
        :error-messages="errorMessage"
        :label="props.name"
        :name="props.name"
        :type="props.type"
      />
    </VeeField>
  </div>
</template>

<style scoped></style>
