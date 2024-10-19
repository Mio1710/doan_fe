<script setup lang="ts">
import AppTextField from '~/components/common/atoms/AppTextField.vue'

const form = defineModel()
</script>

<template>
  <app-text-field v-model="form.main_criteria" name="Tiêu chí đánh giá" rules="required" type="textarea" />
  <app-text-field v-model="form.sub_criteria" name="Tiêu chí phụ" type="textarea" />
  <app-text-field v-model="form.cof" name="Hệ số" placeholder="0.3..." type="number" />
</template>

<style scoped></style>
