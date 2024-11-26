<script setup lang="ts">
import { useQueryClient } from 'vue-query'
import FormCard from '~/components/common/molecules/FormCard.vue'
import AppTextField from '~/components/common/atoms/AppTextField.vue'
import StudentTeacherAutocomplete from "~/components/common/atoms/StudentTeacherAutocomplete.vue";

const props = defineProps({
  intern: {
    type: Object,
    required: true,
    teacher_id: [],
    company_name: '',
    address: '',
    company_phone: '',
    company_email: '',
    supervisor_name: '',
    supervisor_phone: '',
    supervisor_email: '',
  },
})

const form = ref({ ...props.intern })

const { $api, $toast } = useNuxtApp()
const emit = defineEmits(['cancel'])
const queryClient = useQueryClient()

const importStudentIntern = () => {
  form.value.status = 'pending'
  $api.intern.updateIntern(form.value.id, form.value).then(() => {
    $toast.success('Cập nhật thành công')
    queryClient.invalidateQueries('intern')
    emit('cancel')
  })
}
</script>

<template>
    <form-card can-cancel cancel-text="Hủy" title="Đăng ký thưc tập" @cancel="emit('cancel')" @submit="importStudentIntern">
      <app-text-field v-model="form.company_name" name="Tên công ty" rules="required" />
      <app-text-field v-model="form.company_email" name="Emai công ty" type="textarea" />
      <app-text-field v-model="form.company_phone" name="SĐT công ty" />
      <app-text-field v-model="form.address" name= "Địa chỉ công ty" />
      <app-text-field v-model="form.supervisor_name" name="Tên người hướng dẫn" />
      <app-text-field v-model="form.supervisor_phone" name="Số điện thoại người hướng dẫn" />
      <app-text-field v-model="form.supervisor_email" name="Email người hướng dẫn" />
      <student-teacher-autocomplete v-model="form.teacher_id" name="Giảng viên" rules="required" />
    </form-card>
  </template>
  
