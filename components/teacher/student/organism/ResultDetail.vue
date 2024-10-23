<script setup lang="ts">
import FormCard from '~/components/common/molecules/FormCard.vue'
import useGetStudentResultTopicLOs from '~/composables/teacher/use-get-result-topic-lo'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
const { $api, $toast } = useNuxtApp()
const studentId = ref(props.item.id)
const { items, isLoading, error, refetch } = useGetStudentResultTopicLOs(
  { studentId: studentId.value },
  {
    enabled: !!studentId.value,
  },
)
const headers = [
  {
    title: 'STT',
    align: 'center',
    sortable: false,
    value: 'index',
    width: 20,
  },
  { title: 'Tiêu chí đánh giá', value: 'main_criteria', width: '50%', minWidth: 500 },
  { title: 'Tiêu chí phụ', value: 'sub_criteria', width: '30%', minWidth: 100 },
  { title: 'Hệ số', value: 'cof', width: '7%', minWidth: 50 },
  { title: 'Điểm', value: 'score', width: '7%', minWidth: 50 },
]

// clone an array to edit like items score
const itemsClone = ref(items.value.map((item) => ({ ...item })))
const emit = defineEmits(['cancel', 'success'])
watch(
  () => items.value,
  (newItems) => {
    itemsClone.value = newItems.map((item) => ({ ...item }))
  },
)

const handleInvalidScore = (item, index) => {
  if (item.score < 0 || item.score > 10) {
    itemsClone.value[index].score = ''
    $toast.error('Vui lòng điền điểm hợp lệ (0 - 10)')
  }
}

const submit = () => {
  $api.teacher
    .updateStudentResultLOs(itemsClone.value)
    .then(() => {
      $toast.success('Cập nhật điểm thành công')
      emit('success')
      refetch()
    })
    .finally(() => {
      emit('cancel')
    })
}
</script>

<template>
  <form-card
    can-cancel
    @cancel="emit('cancel')"
    cancel-text="Đóng"
    :title="`Điểm quá trình của sinh viên: ${item?.hodem} ${item?.ten}`"
    @submit="submit"
  >
    <v-table class="elevation-1">
      <thead>
        <tr>
          <th
            v-for="header in headers"
            :key="header.value"
            :class="`text-${header.align}`"
            :style="{ width: header.width }"
          >
            {{ header.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in itemsClone" :key="item.id">
          <td class="text-center">{{ index + 1 }}</td>
          <td>{{ item.main_criteria }}</td>
          <td>{{ item.sub_criteria }}</td>
          <td class="text-center">{{ item.cof }}</td>
          <td class="text-center">
            <v-text-field
              v-model="item.score"
              type="number"
              variant="plain"
              @change="handleInvalidScore(item, index)"
            />
          </td>
        </tr>
      </tbody>
    </v-table>

    <div class="text-center font-weight-bold text-error py-2"><span>Điểm tổng:</span></div>
  </form-card>
</template>
