<script setup lang="ts">
import { useQueryClient } from 'vue-query'
import { format } from 'date-fns'
import AppTextField from '~/components/common/atoms/AppTextField.vue'
import ImportStudentTopic from '~/components/admin/student-topic/molecules/ImportStudentTopic.vue'
import UpdateFaculty from '~/components/admin/super/molecules/UpdateFaculty.vue'
import ImportTeacher from '~/components/admin/super/molecules/ImportTeacher.vue'
import useGetTeachers from '~/composables/admin/use-get-teachers'

definePageMeta({
  layout: 'auth',
  middleware: ['is-admin'],
})
const isCreate = ref(false)
const semester = ref('')
const headers = [
  {
    title: 'STT',
    align: 'center',
    sortable: false,
    key: 'index',
    width: 50,
  },
  { title: 'Giảng viên', key: 'ten', width: '20%', minWidth: 200 },
  { title: 'Mã số', key: 'maso', minWidth: 200 },
  { title: 'Cán bộ môn', key: 'is_super_teacher', width: '15%', minWidth: 100, align: 'center' },
  { title: 'Cán bộ khoa', key: 'is_admin', width: '15%', minWidth: 100, align: 'center' },
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
    $api.teacher.importUser.then(() => {
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

const { items, totalItems, isLoading, refetch } = useGetTeachers(queryBuilder)
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-full">
    <div class="text-lg font-bold text-uppercase">Quản lý giảng viên</div>
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
            <import-teacher @cancel="isActive.value = false" @success="refetch" />
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
      <div class="mt-2 h-[calc(100%_-_45px)] overflow-y-hidden">
        <v-data-table
          class="h-full"
          fixed-header
          :headers="headers"
          hide-default-footer
          :items="items"
          :loading="isLoading"
        >
          <template #item.index="{ index }">
            <span>{{ index + 1 }}</span>
          </template>
          <template #item.is_super_teacher="{ item }">
            <v-switch v-model="item.types" color="success" hide-details @click="handleActive(item)" />
          </template>
          <template #item.is_admin="{ item }">
            <v-switch v-model="item.types" color="success" hide-details @click="handleActive(item)" />
          </template>
          <template #item.created_at="{ item }">
            <span>{{ format(new Date(item?.created_at), 'dd/MM/yyyy') }}</span>
          </template>
          <template #item.ten="{ item }">
            <span>{{ item.hodem + ' ' + item.ten }}</span>
          </template>
          <template #item.action="{ item }">
            <v-dialog min-width="400" width="40%">
              <template #activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" color="success" icon size="small" variant="text">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <template #default="{ isActive }">
                <update-faculty :topic="item" @cancel="isActive.value = false" />
              </template>
            </v-dialog>
          </template>
        </v-data-table>
      </div>
    </v-card>
  </div>
</template>

<style></style>
