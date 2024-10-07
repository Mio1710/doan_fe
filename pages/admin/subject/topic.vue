<script setup lang="ts">
import { useQueryClient } from 'vue-query'
import { format } from 'date-fns'
import topicStatus from '../../../plugins/filters/topic-status'
import AppTextField from '~/components/common/atoms/AppTextField.vue'
import CreateTopic from '~/components/teacher/topic/molecules/CreateTopic.vue'

definePageMeta({
  layout: 'auth',
  middleware: ['is-super-teacher'],
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
  { title: 'Tên đề tài', key: 'ten', width: '25%', minWidth: 250 },
  { title: 'Mô tả', key: 'description', width: '30%', minWidth: 350 },
  { title: 'Yêu cầu', key: 'requirement', width: '20%', minWidth: 200 },
  { title: 'Kiến thức kỹ năng', key: 'knowledge', width: '15%', minWidth: 200 },
  { title: 'Trạng thái', key: 'status', width: '10%', minWidth: 100 },
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

const { items, totalItems, isLoading, refetch } = useGetTopic(queryBuilder)
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-full">
    <div class="text-lg font-bold text-uppercase">Duyệt đề tài</div>
    <v-card class="pa-3 h-full" color="white" variant="flat">
      <div class="mt-2 h-[calc(100%_-_30px)] overflow-y-hidden">
        <v-data-table class="h-full" :headers="headers" hide-default-footer fixed-header :items="items">
          <template #item.index="{ index }">
            <span>{{ index + 1 }}</span>
          </template>
          <template #item.status="{ item }">
            <div class="ma-2 text-center">
              <v-chip
                v-if="item.status == 'pending'"
                class="mb-2"
                color="success"
                size="small"
                variant="outlined"
                @click="handleCheck(item, 'approved')"
              >
                <v-icon>mdi-check</v-icon>
                <span>Duyệt</span>
              </v-chip>
              <v-chip
                v-if="item.status == 'pending'"
                color="error"
                size="small"
                variant="outlined"
                @click="handleCheck(item, 'rejected')"
              >
                <v-icon>mdi-close</v-icon>
                <span>Từ chối</span>
              </v-chip>
              <v-chip
                v-if="item.status != 'pending'"
                :color="topicStatus.statusColor(item.status)"
                size="small"
                variant="flat"
              >
                <span>{{ topicStatus.statusType(item.status) }}</span>
              </v-chip>
            </div>
          </template>
        </v-data-table>
      </div>
    </v-card>
  </div>
</template>

<style scoped></style>
