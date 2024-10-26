<script setup lang="ts">
import { useQueryClient } from 'vue-query'
import { format } from 'date-fns'
import topicStatus from '../../../plugins/filters/topic-status'
import AppTextField from '~/components/common/atoms/AppTextField.vue'
import CreateTopic from '~/components/teacher/topic/molecules/CreateTopic.vue'
import useGetListTeacherGroups from '~/composables/super-teachers/use-get-list-teacher-group'
import CreateTeacherGroup from '~/components/admin/super/molecules/CreateTeacherGroup.vue'

definePageMeta({
  layout: 'auth',
  middleware: ['is-super-teacher'],
})

const headers = [
  {
    title: 'STT',
    align: 'center',
    sortable: false,
    key: 'index',
    width: 50,
  },
  { title: 'Nhóm phản biện', key: 'name', width: '20%', minWidth: 200 },
  { title: 'Giảng viên', key: 'gv', minWidth: 450 },
  { title: 'Ngày phản biện', key: 'date', width: '15%', minWidth: 150 },
  { title: '', key: 'action', width: '10%', minWidth: 100 },
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

const { items, totalItems, isLoading, refetch, isFetching } = useGetListTeacherGroups(queryBuilder)
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-full">
    <div class="text-lg font-bold text-uppercase">Phân nhóm giảng viên phản biện</div>
    <v-card class="pa-3 h-full" color="white" variant="flat">
      <div class="d-flex">
        <v-dialog min-width="400" width="40%">
          <template #activator="{ props: activatorProps }">
            <v-btn color="success" size="small" v-bind="activatorProps">
              <v-icon>mdi-plus</v-icon>
              <span>Thêm mới nhóm</span>
            </v-btn>
          </template>
          <template #default="{ isActive }">
            <create-teacher-group @cancel="isActive.value = false" />
          </template>
        </v-dialog>
        <v-spacer />
        <v-btn color="success" :loading="isFetching" size="small" @click="refetch">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </div>
      <div class="mt-2 h-[calc(100%_-_30px)] overflow-y-hidden">
        <v-data-table
          class="h-full"
          fixed-header
          :headers="headers"
          hide-default-footer
          :items="items"
          :loading="isFetching"
        >
          <template #item.index="{ index }">
            <span>{{ index + 1 }}</span>
          </template>
          <template #item.gv="{ item }">
            <div v-for="(teacher, index) in item.teachers" :key="index">
              {{ teacher.teacher?.maso }} - {{ teacher.teacher?.hodem }} {{ teacher.teacher?.ten }}
            </div>
          </template>
        </v-data-table>
      </div>
    </v-card>
  </div>
</template>

<style scoped></style>
