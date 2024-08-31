<script setup lang="ts">
const items = [
  {
    id: 1,
    object: 'Sắp xếp, tổ chức được tài liệu một cách khoa học',
    second: 'Chấm thuyết minh',
    cof: 1,
    score: null,
  },
  {
    id: 2,
    object: 'Trình bày thuyết minh của đề tài',
    second: 'Chấm thuyết minh',
    cof: 1,
    score: null,
  },
  {
    id: 3,
    object:
      'Xác định được các dữ kiện quan trọng của đề tài (Căn cứ trên yêu cầu của đề án, sinh viên xác định đúng các dữ kiện, giả thiết, tiêu chuẩn khi thực hiện đề tài)',
    second: 'Chấm thuyết minh',
    cof: 1,
    score: null,
  },
  {
    id: 4,
    object:
      'Áp dụng được kiến thức chuyên ngành khi thực hiện đề tài (Phần tính toán, lí luận của sinh viên trong đề tài)',
    second: 'Chấm thuyết minh',
    cof: 4,
    score: null,
  },
  {
    id: 5,
    object:
      'Giao tiếp được bằng lời trong môi trường kỹ thuật (Khả năng trình bày của sinh viên khi được giảng viên yêu cầu báo cáo kết quả công việc, trả lời câu hỏi, hoặc trình bày trước hội đồng)',
    second: 'Quan sát',
    cof: 0.5,
    score: null,
  },
  {
    id: 6,
    object: 'Cung cấp dữ liệu để làm rõ luận điểm hoặc để cung cấp thông tin cho người nghe',
    second: 'Quan sát',
    cof: 0.5,
    score: null,
  },
  {
    id: 7,
    object: 'Sử dụng được tài nguyên phục vụ thực hiện khóa luận tốt nghiệp',
    second: 'Quan sát',
    cof: 0.5,
    score: null,
  },
  {
    id: 8,
    object: 'Thể hiện được sự cam kết về đảm bảo chất lượng',
    second: 'Quan sát',
    cof: 0.5,
    score: null,
  },
  {
    id: 9,
    object: 'Thể hiện được sự cam kết về đúng tiến độ',
    second: 'Quan sát',
    cof: 0.5,
    score: null,
  },
  {
    id: 10,
    object: 'Sắp xếp, tổ chức',
    second: 'Quan sát',
    cof: 0.5,
    score: null,
  },
]
const headers = [
  {
    title: 'STT',
    align: 'start',
    sortable: false,
    value: 'index',
    width: '2%',
    minWidth: 20,
  },
  { title: 'Nội dung', value: 'object', width: '70%', minWidth: 700 },
  { title: 'Loại', value: 'second', width: '10%', minWidth: 100 },
  { title: 'Trọng số', value: 'cof', width: '5%', minWidth: 50 },
  { title: 'Điểm', value: 'score', width: '5%', minWidth: 50 },
]
</script>

<template>
  <div>
    <p>
      <span>50% tiến độ</span>
      <span class="bg-blue-accent-2 ml-3">Trọng số 50%</span>
    </p>
    <v-data-table class="elevation-1" :headers="headers" hide-default-footer hover :items="items">
      <template #item.index="{ index }">
        {{ index + 1 }}
      </template>
    </v-data-table>
  </div>
</template>

<style scoped></style>
