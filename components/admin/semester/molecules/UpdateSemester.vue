<script setup lang="ts">
import FormCard from '~/components/common/molecules/FormCard.vue'
import AppTextField from '~/components/common/atoms/AppTextField.vue'

const props = defineProps({
  semester: {
    type: Object,
    required: true,
  },
})

const form = ref({ ...props.semester })
const emit = defineEmits(['cancel'])
const { $api, $toast } = useNuxtApp()
const updateSemester = () => {
  // call api update
  console.log('updateSemester', form.value)
  $api.semester
    .updateSemester(form.value.id, {
      ten: form.value.ten,
      note: form.value.note,
    })
    .then(() => {
      // close dialog
      emit('update')
      emit('cancel')
      $toast.success('Cập nhật đợt đăng ký thành công')
    })
}
</script>

<template>
  <form-card
    can-cancel
    cancel-text="Hủy"
    title="Chỉnh sửa đợt đăng ký"
    @cancel="emit('cancel')"
    @submit="updateSemester"
  >
    <app-text-field v-model="form.ten" name="Tên kỳ đăng ký" rules="required" />
    <app-text-field v-model="form.note" name="Ghi chú" />
  </form-card>
</template>

<style scoped></style>
