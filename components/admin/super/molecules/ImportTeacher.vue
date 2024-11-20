<script setup lang="ts">
import { serialize } from 'object-to-formdata'
import { useQueryClient } from 'vue-query'
import * as XLSX from 'xlsx'
import FormCard from '~/components/common/molecules/FormCard.vue'
import AppTextField from '~/components/common/atoms/AppTextField.vue'

const file = ref(null)
const { $api, $toast } = useNuxtApp()
const emit = defineEmits(['cancel', 'success'])
const queryClient = useQueryClient()

const headers = [
  {
    title: 'STT',
    align: 'center',
    sortable: false,
    key: 'index',
    width: 50,
  },
  { title: 'Giảng viên', key: 'ten', width: '20%', minWidth: 200 },
  { title: 'Mã số', key: 'maso', minWidth: 100 },
  { title: 'Email', key: 'email', minWidth: 100 },
  { title: 'Cán bộ môn', key: 'is_super_teacher', width: '15%', minWidth: 100, align: 'center' },
  { title: 'Cán bộ khoa', key: 'is_admin', width: '15%', minWidth: 100, align: 'center' },
]

const importTeacher = () => {
  $api.admin.importUser(serialize({ file: file.value })).then(() => {
    $toast.success('Import giảng viên thành công')
    queryClient.invalidateQueries('student-topic')
    emit('cancel')
    emit('success')
  })
}

const allowSubmit = ref(false)

const requiredHeaders = ['STT', 'maso', 'hodem', 'ten', 'email', 'ngay_sinh', 'is_admin', 'is_super_teacher']
const items = ref([])
const preview = () => {
  const reader = new FileReader()
  if (file.value) {
    reader.onload = (event) => {
      if (event.target?.result) {
        const data = XLSX.read(event.target.result, { type: 'binary' })
        const sheet = data.Sheets[data.SheetNames[0]]
        const headersRow = XLSX.utils.sheet_to_json(sheet, { header: 1 })[0]
        console.log('Headers:', headersRow)
        if (JSON.stringify(headersRow) !== JSON.stringify(requiredHeaders)) {
          $toast.error('File không đúng định dạng')
          return
        }
        const dataJson = XLSX.utils.sheet_to_json(sheet)
        console.log('Parsed data:', dataJson)
        allowSubmit.value = true
        items.value = dataJson
      }
    }
    reader.readAsBinaryString(file.value)
  }
}
</script>

<template>
  <form-card
    can-cancel
    cancel-text="Hủy"
    :hide-submit="!allowSubmit"
    title="Import giảng viên"
    @cancel="emit('cancel')"
    @submit="importTeacher"
  >
    <div v-if="allowSubmit">
      <div class="d-flex items-center">
        <v-icon color="error" class="ma-2">mdi-alert-circle</v-icon>
        <span>Dữ liệu không hợp lệ có thể không được lưu!</span>
      </div>
      <v-data-table-virtual :headers="headers" height="400" item-value="name" :items="items">
        <template #item.index="{ index }">
          <span>{{ index + 1 }}</span>
        </template>
        <template #item.ten="{ item }">
          <span v-if="item.hodem && item.ten">{{ item.hodem + ' ' + item.ten }}</span>
          <span v-else><v-icon color="error">mdi-alert-circle</v-icon></span>
        </template>
        <template #item.maso="{ item }">
          <span v-if="item.maso">{{ item.maso }}</span>
          <span v-else><v-icon color="error">mdi-alert-circle</v-icon></span>
        </template>
        <template #item.email="{ item }">
          <span v-if="item.email">{{ item.email }}</span>
          <span v-else><v-icon color="error">mdi-alert-circle</v-icon></span>
        </template>
      </v-data-table-virtual>
    </div>
    <div v-else>
      <div class="mt-5">
        Tải xuống mẫu import dữ liệu:
        <a download href="/files/teacher_template.xlsx" target="_blank">download</a>
      </div>
      <div class="mt-4">
        <div class="max-w-[520px] ma-auto d-flex">
          <v-file-input v-model="file" accept=".xlsx" class="w-full mr-4" label="File dữ liệu" variant="outlined" />
          <div class="d-none">
            <app-text-field v-model="file" rules="required" />
          </div>
          <v-btn color="success" :disabled="!file" @click="preview">Xem trước</v-btn>
        </div>
      </div>
    </div>
  </form-card>
</template>
