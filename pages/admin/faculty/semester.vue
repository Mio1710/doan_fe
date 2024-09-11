<script setup lang="ts">
import { useQueryClient } from 'vue-query'
import AppTextField from '~/components/common/atoms/AppTextField.vue'

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
  { title: 'Tên kỳ đăng ký', key: 'ten', width: '35%', minWidth: 250 },
  { title: 'Trạng thái', key: 'status', width: '15%', minWidth: 150 },
  { title: 'Mô tả', key: 'carbs', width: '35%', minWidth: 300 },
  { title: 'Yêu cầu', key: 'protein', width: '20%', minWidth: 200 },
  { title: 'Kiến thức kỹ năng', key: 'iron', width: '15%', minWidth: 100 },
  { title: 'Giảng viên HD', key: '', width: '10%', minWidth: 100 },
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

const { items, totalItems, isLoading, refetch } = useGetSemesters(queryBuilder)
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-full">
    <div class="text-lg font-bold text-uppercase">Tạo đợt đăng ký mới</div>
    <v-card class="pa-3 h-full" color="white" variant="flat">
      <div class="d-flex">
        <v-btn color="success" height="40" @click="isCreate = true">
          <v-icon>mdi-plus</v-icon>
          <span>Tạo mới</span>
        </v-btn>
        <div v-if="isCreate" class="d-flex w-full px-4 gap-4">
          <app-text-field v-model="semester" class="min-w-[250px]" name="Tên đợt đăng ký" />
          <v-btn color="success" :disabled="!semester" height="40">
            <v-icon>mdi-check</v-icon>
            <span>Lưu</span>
          </v-btn>
        </div>
      </div>
      <div>
        <v-data-table :headers="headers" :items="items" :items-per-page="5">
          <template #item.index="{ index }">
            <span>{{ index + 1 }}</span>
          </template>
          <template #item.status="{ item }">
            <v-switch v-model="item.status" color="success" hide-details @click="handleActive(item)" />
          </template>
        </v-data-table>
      </div>
    </v-card>
  </div>
</template>

<style scoped></style>
