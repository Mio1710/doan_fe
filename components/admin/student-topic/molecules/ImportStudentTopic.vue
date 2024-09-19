<script setup lang="ts">
import { serialize } from 'object-to-formdata'
import FormCard from '~/components/common/molecules/FormCard.vue'

const file = ref(null)
const { $api, $toast } = useNuxtApp()
const emit = defineEmits(['cancel'])
const importStudentTopic = () => {
  $api.studentTopic.importStudentTopic(serialize({ file: file.value })).then(() => {
    $toast.success('Import sinh viên khóa luận thành công')
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
        <v-file-input v-model="file" accept=".xlsx" class="w-full mr-4" label="File dữ liệu" variant="outlined" />
        <v-btn color="success" :disabled="!file" @click="preview">Xem trước</v-btn>
      </div>
    </div>
  </form-card>
</template>
