<script setup lang="ts">
import { useQueryClient } from 'vue-query'
import { format } from 'date-fns'
import AppTextField from '~/components/common/atoms/AppTextField.vue'
import ImportStudentTopic from '~/components/admin/student-topic/molecules/ImportStudentTopic.vue'
import UpdateFaculty from '~/components/admin/super/molecules/UpdateFaculty.vue'
import TeacherResult from '~/components/student/result/organisms/TeacherResult.vue'
import ResultDetail from '~/components/student/result/molecules/ResultDetail.vue'
import useTeacherGetStudentTopics from '~/composables/teacher/use-teacher-get-student-topic'

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
  { title: 'Tên sinh viên', key: 'ten', width: '15%', minWidth: 150 },
  { title: 'MSSV', key: 'maso', width: '10%', minWidth: 100 },
  { title: 'Lớp', key: 'lop', width: '15%', minWidth: 150 },
  { title: 'Nhóm', key: 'note', width: '5%', minWidth: 50 },
  { title: 'Đề tài', key: 'topic' },
  { title: 'Nhập điểm', key: 'action', width: 100, sortable: false, align: 'center' },
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

const { items, totalItems, isLoading, refetch } = useTeacherGetStudentTopics(queryBuilder)
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-full">
    <div class="text-lg font-bold text-uppercase">Sinh viên khóa luận</div>
    <v-card class="pa-3 h-full" color="white" variant="flat">
      <div class="mt-2">
        <v-data-table :headers="headers" hide-default-footer :items="items">
          <template #item.index="{ index }">
            <span>{{ index + 1 }}</span>
          </template>
          <template #item.ten="{ item }">
            <span>{{ item.hodem + ' ' + item.ten }}</span>
          </template>

          <template #item.action="{}">
            <v-dialog min-width="800" width="80%">
              <template #activator="{ props: activatorProps }">
                <v-btn rounded variant="text" v-bind="activatorProps">
                  <v-icon color="success">mdi-pencil</v-icon>
                </v-btn>
              </template>
              <template #default="{ isActive }">
                <result-detail @cancel="isActive.value = false" />
              </template>
            </v-dialog>
          </template>
        </v-data-table>
      </div>
    </v-card>
  </div>
</template>

<style scoped></style>
