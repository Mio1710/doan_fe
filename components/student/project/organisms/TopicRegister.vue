<script setup lang="ts">
const serverOptions = ref({
  page: 1,
  rowsPerPage: 25,
  sortBy: '-created_at',
  sortType: 'asc',
})
const queryBuilder = computed(() => ({
  ...serverOptions.value,
  filters: { viewAll: true },
}))
const { $api, $toast } = useNuxtApp()

const { items, totalItems, isLoading, refetch } = useGetTopic(queryBuilder)
// const items = ref([])
const headers = [
  {
    title: 'STT',
    align: 'start',
    sortable: false,
    key: 'index',
    width: 50,
  },
  { title: 'Tên đề tài', key: 'ten', width: '20%', minWidth: 200 },
  { title: 'Mô tả', key: 'description', width: '25%', minWidth: 250 },
  { title: 'Yêu cầu', key: 'requirement', width: '15%', minWidth: 200 },
  { title: 'Kiến thức kỹ năng', key: 'knowledge', width: '15%', minWidth: 200 },
  { title: 'GVHD', key: 'gv', width: '10%', minWidth: 100 },
  { title: '', key: 'action', width: 30 },
]

const registerTopic = (item) => {
  $api.studentTopic.registerTopic(item.id).then(() => {
    $toast.success('Đăng ký đề tài thành công')
  })
}
</script>

<template>
  <v-data-table class="h-full" fixed-header :headers="headers" hide-default-footer :items="items">
    <template #item.index="{ index }">
      <span>{{ index + 1 }}</span>
    </template>
    <template #item.name="{ item }">
      <span v-html="item.name" />
    </template>

    <template #item.gv="{ item }">
      <span>{{ item?.createdBy.hodem }} {{ item?.createdBy.ten }}</span>
    </template>
    <template #item.action="{ item }">
      <v-btn color="success" size="x-small" @click="registerTopic(item)">Đăng ký</v-btn>
    </template>
  </v-data-table>
</template>

<style scoped></style>
