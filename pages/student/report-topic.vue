<script setup lang="ts">
import { serialize } from 'object-to-formdata'
import AppForm from '~/components/common/molecules/AppForm.vue'
import AppTextField from '~/components/common/atoms/AppTextField.vue'

definePageMeta({
  layout: 'auth',
})
const loading = ref(false)
const form = reactive({
  week: '',
  description: '',
  file: null,
})
const { $api, $toast } = useNuxtApp()

const onSubmit = () => {
  loading.value = true
  $api.reportTopic
    .createReportTopic(serialize(form))
    .then(() => {
      $toast.success('Nộp báo cáo thành công')
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-full">
    <div class="text-lg font-bold text-uppercase">Báo cáo tiến độ đề tài đồ án</div>
    <v-card class="pa-3 h-full" color="white" variant="flat">
      <div>Form báo cáo tiến độ đề tài đồ án</div>
      <app-form v-slot="{ handleSubmit }">
        <app-text-field
          v-model="form.week"
          class="mb-5"
          label="Tuần số"
          name="Tuần số"
          rules="required"
          type="number"
        />
        <v-file-input
          v-model="form.file"
          accept=".doc,.docx,.pdf"
          clearable
          label="File báo cáo"
          name="File báo cáo"
          :prepend-icon="false"
          prepend-inner-icon="mdi-paperclip"
          show-size
          variant="outlined"
        />
        <app-text-field
          v-model="form.description"
          class="mb-5"
          label="Mô tả"
          name="Mô tả"
          rules="required"
          type="textarea"
        />
        <div class="w-full text-center">
          <v-btn color="success" :loading="loading" size="large" @click="handleSubmit(onSubmit)">Nộp báo cáo</v-btn>
        </div>
      </app-form>
    </v-card>
  </div>
</template>

<style scoped></style>
