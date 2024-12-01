<script setup lang="ts">
import topicStatus from '~/plugins/filters/topic-status'
import useGetStudentRecommendTopics from '~/composables/teacher/use-get-student-recommend-topic'

definePageMeta({
  layout: 'auth',
  middleware: ['is-teacher'],
})
const headers = [
  {
    title: 'STT',
    align: 'center',
    sortable: false,
    key: 'index',
    width: 50,
  },
  { title: 'Tên đề tài', key: 'ten', minWidth: 250 },
  { title: 'Mô tả', key: 'description', width: '30%', minWidth: 350 },
  { title: 'Kiến thức kỹ năng', key: 'knowledge', width: '15%', minWidth: 150 },
  { title: 'Sinh viên', key: 'sv', width: '10%', minWidth: 100 },
  { title: 'Trạng thái', key: 'status', width: '10%', minWidth: 100, align: 'center' },
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
const { data } = useAuth()

const { items, totalItems, isLoading, refetch } = useGetStudentRecommendTopics(queryBuilder)
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-full">
    <div class="text-lg font-bold text-uppercase">Đề tài sinh viên đăng ký</div>
    <v-card class="pa-3 h-full" color="white" variant="flat">
      <div class="d-flex items-center">
        <v-spacer />
        <v-btn icon size="x-small" variant="text" @click="refetch()">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </div>
      <div class="mt-2 h-[calc(100%_-_45px)] overflow-y-hidden">
        <v-data-table-virtual class="h-full" fixed-header :headers="headers" :items="items">
          <template #item.index="{ index }">
            <span>{{ index + 1 }}</span>
          </template>
          <template #item.gv="{ item }">
            <span>{{ item.teacher?.hodem }} {{ item.teacher?.ten }}</span>
          </template>
          <template #item.sv="{ item }">
            <span>{{ item.student?.hodem }} {{ item.student?.ten }}</span>
          </template>
          <template #item.status="{ item }">
            <v-chip :color="topicStatus.statusColor(item.status)" size="small" variant="flat">
              {{ topicStatus.statusType(item.status) }}
            </v-chip>
          </template>
        </v-data-table-virtual>
      </div>
    </v-card>
  </div>
</template>
