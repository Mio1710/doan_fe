<script setup lang="ts">
import ResultDetail from '~/components/student/result/molecules/ResultDetail.vue'
import useGetStudentResultTopics from '~/composables/student/use-get-result-topic'

definePageMeta({
  layout: 'auth',
})
const serverOptions = ref({
  page: 1,
  rowsPerPage: 25,
  sortBy: '-created_at',
  sortType: 'asc',
})
const queryBuilder = computed(() => ({
  ...serverOptions.value,
}))

const headers = [
  { title: 'STT', align: 'center', key: 'index', width: '2%', minWidth: 20, sortable: false },
  { title: 'Mã SV', key: 'maso', width: '7%', minWidth: 70, sortable: false },
  { title: 'Họ và tên', key: 'fullName', width: '10%', minWidth: 100, sortable: false },
  { title: 'Lớp', key: 'lop', width: '7%', minWidth: 70, sortable: false },
  { title: 'Nhóm', key: 'nhom', width: '4%', minWidth: 40, sortable: false },
  { title: 'Kết quả đánh giá', key: 'result', width: '10%', minWidth: 100, sortable: false, align: 'center' },
  { title: 'Tên đề tài', key: 'projectName', width: '20%', minWidth: 200, sortable: false },
  { title: 'GVHD', key: 'gv', width: '8%', minWidth: 80, sortable: false },
]
const emit = defineEmits(['cancel'])
const { items, totalItems, isLoading, refetch } = useGetStudentResultTopics()
</script>

<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="text-lg font-bold">Kết quả chấm từ GVHD</div>
    <v-card class="pa-3" color="white" variant="flat">
      <div class="d-flex">
        <div class="text-lg py-2 bottom-border">Kết quả đánh giá khóa luận từ giảng viên hướng dẫn</div>
        <v-spacer />
        <v-btn icon size="x-small" variant="text" @click="refetch()">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </div>

      <v-data-table v-if="items.student" class="mt-2" :headers="headers" hide-default-footer :items="[items]">
        <template #item.index="{ index }">
          <span>{{ index + 1 }}</span>
        </template>
        <template #item.fullName="{ item }">
          <span>{{ item.student.hodem }} {{ item.student.ten }}</span>
        </template>

        <template #item.lop="{ item }">
          <span>{{ item.student.lop }}</span>
        </template>

        <template #item.maso="{ item }">
          <span>{{ item?.student.maso }}</span>
        </template>

        <template #item.projectName="{ item }">
          <span>{{ item.topic.ten }}</span>
        </template>
        <template #item.nhom="{ item }">
          <span class="text-red">{{ item.group_id }}</span>
        </template>
        <template #item.gv="{ item }">
          <span>{{ item.topic?.teacher.hodem }} {{ item.topic?.teacher.ten }}</span>
        </template>
        <template #item.result="{ item }">
          <v-dialog min-width="800" width="80%">
            <template #activator="{ props: activatorProps }">
              <v-btn rounded variant="text" v-bind="activatorProps">
                <v-icon color="success">mdi-eye</v-icon>
              </v-btn>
            </template>
            <template #default="{ isActive }">
              <result-detail :item="item.student" @cancel="isActive.value = false" />
            </template>
          </v-dialog>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<style scoped></style>
