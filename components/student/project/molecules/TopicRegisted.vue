<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})
const headers = [
  {
    title: 'STT',
    align: 'start',
    sortable: false,
    key: 'index',
    width: 50,
  },
  { title: 'Tên đề tài', key: 'ten', width: '20%', minWidth: 150 },
  { title: 'Mô tả', key: 'description', width: '35%', minWidth: 300 },
  { title: 'Yêu cầu', key: 'requirement', width: '20%', minWidth: 200 },
  { title: 'Kiến thức kỹ năng', key: 'knowledge', width: '15%', minWidth: 100 },
  { title: 'Giảng viên HD', key: 'gvhd', width: '10%', minWidth: 100 },
]
</script>

<template>
  <div class="text-lg py-2 bottom-border">Đề tài đã đăng ký thành công</div>
  <v-data-table class="mt-2" :headers="headers" hide-default-footer :items="items">
    <template #item.index="{ index }">
      <span>{{ index + 1 }}</span>
    </template>
    <template #item.name="{ item }">
      <span v-html="item.name" />
    </template>
    <template #item.gvhd="{ item }">{{ item.createdBy.hodem }} {{ item.createdBy.ten }}</template>
  </v-data-table>
</template>

<style scoped></style>
