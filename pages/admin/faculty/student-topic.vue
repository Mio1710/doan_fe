<script setup lang="ts">
import { useQueryClient } from 'vue-query'
import { format } from 'date-fns'
import AppTextField from '~/components/common/atoms/AppTextField.vue'
import ImportStudentTopic from '~/components/admin/student-topic/molecules/ImportStudentTopic.vue'

definePageMeta({
  layout: 'auth',
  middleware: ['is-admin'],
})
const isCreate = ref(false)
const semester = ref('')
const headers = [
  {
    title: 'STT',
    align: 'start',
    sortable: false,
    key: 'index',
    width: 50,
  },
  { title: 'Tên sinh viên', key: 'ten', width: '25%', minWidth: 250 },
  { title: 'Lớp', key: 'lop', width: '15%', minWidth: 150 },
  { title: 'Nhóm', key: 'note', width: '25%', minWidth: 200 },
  { title: 'Giảng viên hướng dẫn', key: 'name', width: '20%', minWidth: 200 },
  { title: 'Ngày tạo', key: 'created_at', width: '15%', minWidth: 100 },
  { title: '', key: 'action', width: 30 },
]
const serverOptions = ref({
  page: 1,
  rowsPerPage: 25,
  sortBy: '-created_at',
  sortType: 'asc',
})
const queryBuilder = computed(() => ({
  ...serverOptions.value,
}))

const { $api, $toast } = useNuxtApp()

const queryClient = useQueryClient()
const handleActive = (item) => {
  try {
    $api.semester.activeSemester(item.id).then(() => {
      queryClient.invalidateQueries('semester')
      $toast.success('Đã cập nhật trạng thái thành công')
    })
  } catch (error) {
    console.log(error)
  }
}

const createSemester = () => {
  try {
    $api.semester.createSemester({ ten: semester.value }).then(() => {
      queryClient.invalidateQueries('semester')
      $toast.success('Tạo mới thành công')
      isCreate.value = false
      semester.value = ''
    })
  } catch (error) {
    console.log(error)
  }
}

const { items, totalItems, isLoading, refetch } = useGetStudentTopic(queryBuilder)
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-full">
    <div class="text-lg font-bold text-uppercase">Quản lý sinh viên khóa luận</div>
    <v-card class="pa-3 h-full" color="white" variant="flat">
      <div class="d-flex items-center">
        <v-dialog min-width="400" width="40%">
          <template #activator="{ props: activatorProps }">
            <v-btn color="success" size="small" v-bind="activatorProps">
              <v-icon>mdi-plus</v-icon>
              <span>Import</span>
            </v-btn>
          </template>
          <template #default="{ isActive }">
            <import-student-topic @cancel="isActive.value = false" />
          </template>
        </v-dialog>
        <div v-if="isCreate" class="d-flex w-full px-4 gap-4 items-center">
          <app-text-field v-model="semester" class="min-w-[250px]" name="Tên đợt đăng ký" />
          <v-btn class="mb-4" color="success" :disabled="!semester" size="small" @click="createSemester">
            <v-icon>mdi-check</v-icon>
            <span>Lưu</span>
          </v-btn>
        </div>
      </div>
      <div class="mt-2">
        <v-data-table :headers="headers" hide-default-footer :items="items">
          <template #item.index="{ index }">
            <span>{{ index + 1 }}</span>
          </template>
          <template #item.status="{ item }">
            <v-switch v-model="item.status" color="success" hide-details @click="handleActive(item)" />
          </template>
          <template #item.created_at="{ item }">
            <span>{{ format(new Date(item?.created_at), 'dd/MM/yyyy') }}</span>
          </template>
          <template #item.ten="{ item }">
            <span>{{ item.hodem + ' ' + item.ten }}</span>
          </template>
        </v-data-table>
      </div>
    </v-card>
  </div>
</template>

<style scoped></style>
