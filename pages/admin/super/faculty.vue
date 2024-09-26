<script setup lang="ts">
import { useQueryClient } from 'vue-query'
import { format } from 'date-fns'
import topicStatus from '../../../plugins/filters/topic-status'
import AppTextField from '~/components/common/atoms/AppTextField.vue'
import CreateTopic from '~/components/teacher/topic/molecules/CreateTopic.vue'
import useGetFaculties from '~/composables/admin/use-get-faculty'
import CreateFaculty from '~/components/admin/super/molecules/CreateFaculty.vue'
import UpdateFaculty from '~/components/admin/super/molecules/UpdateFaculty.vue'
import CreateSuperTeacher from "~/components/admin/super/molecules/CreateSuperTeacher.vue";

definePageMeta({
  layout: 'auth',
  middleware: ['is-super-admin'],
})
const isCreate = ref(false)
const semester = ref('')
const headers = [
  {
    title: 'STT',
    align: 'start',
    sortable: false,
    key: 'index',
    width: 30,
  },
  { title: 'Tên khoa', key: 'ten', minWidth: 250 },
  { title: 'Mã khoa', key: 'ma_khoa', width: '30%', minWidth: 350 },
  { title: 'Cán bộ khoa', key: 'super_teachers', width: '30%', minWidth: 300, align: 'center' },
  { title: '', key: 'action', width: '10%', minWidth: 100, sortable: false, align: 'center' },
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
const handleCheck = (item, status) => {
  try {
    $api.topic.checkTopic(item.id, status).then(() => {
      queryClient.invalidateQueries('topic')
      $toast.success('Đã cập nhật thành công')
    })
  } catch (error) {
    console.log(error)
  }
}

const { items, totalItems, isLoading, refetch } = useGetFaculties(queryBuilder)
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-full">
    <div class="text-lg font-bold text-uppercase">Quản lý khoa</div>
    <v-card class="pa-3 h-full" color="white" variant="flat">
      <v-dialog min-width="400" width="40%">
        <template #activator="{ props: activatorProps }">
          <v-btn color="success" size="small" v-bind="activatorProps">
            <v-icon>mdi-plus</v-icon>
            <span>Thêm mới Khoa</span>
          </v-btn>
        </template>
        <template #default="{ isActive }">
          <create-faculty @cancel="isActive.value = false" />
        </template>
      </v-dialog>
      <div class="mt-2">
        <v-data-table :headers="headers" hide-default-footer :items="items">
          <template #item.index="{ index }">
            <span>{{ index + 1 }}</span>
          </template>
          <template #item.super_teachers="{ item }">
            <v-dialog min-width="400" width="40%">
              <template #activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" color="success" size="small">Tạo cán bộ khoa</v-btn>
              </template>
              <template #default="{ isActive }">
                <create-super-teacher @cancel="isActive.value = false" :faculty="item" />
              </template>
            </v-dialog>
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

<style scoped></style>
