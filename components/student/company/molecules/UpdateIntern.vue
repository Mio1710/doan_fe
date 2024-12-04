<script setup lang="ts">
import { useQueryClient } from 'vue-query'
import FormCard from '~/components/common/molecules/FormCard.vue'
import AppTextField from '~/components/common/atoms/AppTextField.vue'

const props = defineProps({
  intern: {
    type: Object,
    required: true,
  },
})

const form = ref({ ...props.intern })

const { $api, $toast } = useNuxtApp()
const emit = defineEmits(['cancel'])
const queryClient = useQueryClient()

const importStudentIntern = () => {
  form.value.status = 'pending'
  $api.intern.updateIntern(form.value.id, form.value).then(() => {
    $toast.success('Đăng ký thành công')
    queryClient.invalidateQueries('intern')
    emit('cancel')
  })
}
</script>

<template>
    <form-card can-cancel cancel-text="Hủy" title="Đăng ký thưc tập" @cancel="emit('cancel')" @submit="createStudentIntern">
      <app-text-field v-model="form.company_name" name="Tên công ty" rules="required" />
      <app-text-field v-model="form.company_email" name="Emai công ty" type="textarea" />
      <app-text-field v-model="form.company_phone" name="SĐT công ty" />
      <app-text-field v-model="form.address" name= "Địa chỉ công ty" />
      <app-text-field v-model="form.supervisor_name" name="Tên người hướng dẫn" />
      <app-text-field v-model="form.supervisor_phone" name="Số điện thoại người hướng dẫn" />
      <app-text-field v-model="form.supervisor_email" name="Email người hướng dẫn" />
    </form-card>
  </template>
  
