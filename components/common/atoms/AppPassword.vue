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
})
const value = defineModel()
const show = ref(false)
</script>

<template>
  <VeeField v-slot="{ errorMessage }" v-model="value" :name="props.name" :rules="props.rules">
    <v-text-field
      v-model="value"
      :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :error-messages="errorMessage"
      :label="props.name"
      :name="props.name"
      :type="show ? 'text' : 'password'"
      @click:append-inner="show = !show"
    />
  </VeeField>
</template>

<style scoped></style>
