<script setup lang="ts">
import { serialize } from 'object-to-formdata'
import FormCard from '~/components/common/molecules/FormCard.vue'
import AppTextField from "~/components/common/atoms/AppTextField.vue";

const file = ref(null)
const { $api, $toast } = useNuxtApp()
const emit = defineEmits(['cancel'])
const importStudentTopic = () => {
  $api.studentTopic.importStudentTopic(serialize({ file: file.value })).then(() => {
    $toast.success('Import sinh viên khóa luận thành công')
    emit('cancel')
  })
}

const preview = () => {
  console.log('Preview')
}
</script>

<template>
  <form-card
    can-cancel
    cancel-text="Hủy"
    title="Import sinh viên khóa luận"
    @cancel="emit('cancel')"
    @submit="importStudentTopic"
  >
    <div class="mt-5">
      Tải xuống mẫu import dữ liệu:
      <a download href="/files/student_topic_template.xlsx" target="_blank">download</a>
    </div>
    <div class="mt-4">
      <div class="max-w-[520px] ma-auto d-flex">
        <v-file-input
          v-model="file"
          accept=".xlsx"
          class="w-full mr-4"
          label="File dữ liệu"
          variant="outlined"
        />
        <div class="d-none">
          <app-text-field v-model="file" rules="required" />
        </div>
        <v-btn color="success" :disabled="!file" @click="preview">Xem trước</v-btn>
      </div>
    </div>
  </form-card>
</template>
