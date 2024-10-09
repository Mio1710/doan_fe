<script setup lang="ts">
import ResultDetail from '~/components/student/result/molecules/ResultDetail.vue'
import FormCard from '~/components/common/molecules/FormCard.vue'

const items = [
  {
    masv: '20012011',
    hodem: 'Nguyễn Thị',
    ten: 'Lê',
    lop: 'DHHTTT16A',
    gvhd: 'Võ Ngọc Tấn Phước',
    nhom: '964',
    progress: '10%',
    result: {},
    category: 'Đại học (KLTN)',
    projectName: 'Nghiên cứu NestJS - VueJS, ứng dụng xây dựng website quản lý Khóa luận - Thực tập',
    gv: 'Võ Ngọc Tấn Phước',
    subject: 'IS',
  },
]
const headers = [
  { title: 'STT', align: 'center', key: 'index', width: '2%', minWidth: 20, sortable: false },
  { title: 'Mã SV', key: 'masv', width: '7%', minWidth: 70, sortable: false },
  { title: 'Họ và tên', key: 'fullName', width: '10%', minWidth: 100, sortable: false },
  { title: 'Lớp', key: 'lop', width: '7%', minWidth: 70, sortable: false },
  { title: 'Nhóm', key: 'nhom', width: '4%', minWidth: 40, sortable: false },
  { title: 'Tiến độ hoàn thành', key: 'progress', width: '11%', minWidth: 110, sortable: false },
  { title: 'Kết quả đánh giá', key: 'result', width: '10%', minWidth: 100, sortable: false, align: 'center' },
  { title: 'Loại đề tài', key: 'category', width: '7%', minWidth: 70, sortable: false },
  { title: 'Tên đề tài', key: 'projectName', width: '20%', minWidth: 200, sortable: false },
  { title: 'GVHD', key: 'gv', width: '8%', minWidth: 80, sortable: false },
  { title: 'Bộ môn', key: 'subject', width: '6%', minWidth: 60, sortable: false },
]
const emit = defineEmits(['cancel'])
const parten = ref(null)
const chooseGroup = (item) => {
  parten.value = item.mssv
  console.log(item)
}
</script>

<template>
  <form-card can-cancel cancel-text="Hủy" title="Cập nhật đề tài" @cancel="emit('cancel')" @submit="chooseGroup">
    <div class="text-lg py-2 bottom-border">Kết quả đánh giá khóa luận từ giảng viên hướng dẫn</div>
    <v-data-table class="mt-2" :headers="headers" hide-default-footer :items="items">
      <template #item.index="{ index }">
        <span>{{ index + 1 }}</span>
      </template>
      <template #item.fullName="{ item }">
        <span>{{ item.hodem }} {{ item.ten }}</span>
      </template>
      <template #item.nhom="{ item }">
        <span class="text-red">{{ item.nhom }}</span>
      </template>
      <template #item.progress="{ item }">
        <v-progress-linear color="blue-lighten-2" height="20px" :model-value="item.progress" rounded>
          <template #default="{ value }">
            <span class="text-sm">{{ Math.ceil(value) }}%</span>
          </template>
        </v-progress-linear>
      </template>
      <template #item.result="">
        <v-dialog min-width="800" width="80%">
          <template #activator="{ props: activatorProps }">
            <v-btn rounded variant="text" v-bind="activatorProps">
              <v-icon color="success">mdi-eye</v-icon>
            </v-btn>
          </template>
          <result-detail />
        </v-dialog>
      </template>
    </v-data-table>
  </form-card>
</template>

<style scoped></style>
