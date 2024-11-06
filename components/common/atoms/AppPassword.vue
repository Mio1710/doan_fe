<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: 'text',
  },
  label: {
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
const isRequired = props.rules.includes('required')
</script>

<template>
  <div class="mb-4">
    <VeeField v-slot="{ errorMessage }" v-model="value" :label="label" :name="name" :rules="props.rules">
      <v-text-field
        v-model="value"
        :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :error-messages="errorMessage"
        aria-autocomplete="new-password"
        :label="props.label || props.name"
        :name="props.name || props.label"
        :type="show ? 'text' : 'password'"
        @click:append-inner="show = !show"
      >
        <template v-if="label" #label>
          {{ label }}
          <span v-if="isRequired" class="text-error">*</span>
        </template>
      </v-text-field>
    </VeeField>
  </div>
</template>

<style scoped></style>
