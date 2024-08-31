<script setup lang="ts">
const items = [
  {
    id: 1,
    object:
      'Chứng minh việc sử dụng các nguồn lực cho luận án tốt nghiệp\n' +
      '(Demonstrate the use of resources for graduation thesis)',
    second:
      'Có thể tìm kiếm các tài nguyên cần thiết từ thư viện và internet\n' +
      '(Be able to search the necessary resources from the library and the internet)',
    cof: 0.33,
    score: null,
  },
  {
    id: 2,
    object:
      'Chứng minh việc sử dụng các nguồn lực cho luận án tốt nghiệp\n' +
      '(Demonstrate the use of resources for graduation thesis)',
    second:
      'Có thể chọn các nguồn lực đáp ứng yêu cầu nghiên cứu\n' +
      '(Be able to choose the resources what meet the research requirement)',
    cof: 0.33,
    score: null,
  },
  {
    id: 3,
    object:
      'Chứng minh việc sử dụng các nguồn lực cho luận án tốt nghiệp\n' +
      '(Demonstrate the use of resources for graduation thesis)',
    second: 'Có thể tổ chức các tài nguyên\n' + '(Be able to organize the resources)\t',
    cof: 0.33,
    score: null,
  },
  {
    id: 4,
    object: 'Thể hiện cam kết chất lượng\n' + '(Show commitment to Quality)',
    second: 'Be able to assess the research result',
    cof: 0.33,
    score: null,
  },
  {
    id: 5,
    object: 'Thể hiện cam kết chất lượng\n' + '(Show commitment to Quality)',
    second: 'Be able to define the problems in research to fix',
    cof: 0.33,
    score: null,
  },
  {
    id: 6,
    object: 'Thể hiện cam kết chất lượng\n' + '(Show commitment to Quality)',
    second: 'Show the effort in research to find the results that meet the requirements',
    cof: 0.33,
    score: null,
  },
  {
    id: 7,
    object: 'Show commitment to Timelines',
    second: ' ',
    cof: 0.5,
    score: null,
  },
  {
    id: 8,
    object: 'Show a commitment to Continuous Improvement',
    second: '',
    cof: 0.5,
    score: null,
  },
  {
    id: 9,
    object: 'Apply the knowledge of Electrical Engineering Technology to an engineering technology problem',
    second: '',
    cof: 4,
    score: null,
  },
  {
    id: 10,
    object:
      'Identify specific facts of mathematics, science, engineering and technology needed for an engineering technology problem',
    second: '',
    cof: 1,
    score: null,
  },
  {
    id: 11,
    object: 'Communicate fluently via writing',
    second: 'Form and format of thesis report',
    cof: 0.5,
    score: null,
  },
  {
    id: 12,
    object: 'Communicate fluently via writing',
    second: 'Content of the thesis',
    cof: 0.5,
    score: null,
  },
  {
    id: 13,
    object: 'Communicate fluently via writing',
    second: 'Thesis reference',
    cof: 0.5,
    score: null,
  },
  {
    id: 14,
    object: 'Communicate fluently via writing',
    second: 'Grammar mistakes',
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
  { title: 'Nội dung', value: 'object', width: '40%', minWidth: 450 },
  { title: 'Loại', value: 'second', width: '35%', minWidth: 350 },
  { title: 'Trọng số', value: 'cof', width: '5%', minWidth: 50 },
  { title: 'Điểm', value: 'score', width: '5%', minWidth: 50 },
]
</script>

<template>
  <div>
    <p>
      <span>100% tiến độ</span>
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
