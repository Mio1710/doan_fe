<script setup lang="ts">
import { useQueryClient } from 'vue-query'
import FormCard from '~/components/common/molecules/FormCard.vue'
import AppTextField from '~/components/common/atoms/AppTextField.vue'

const form = reactive({
    company_name: '',
    address: '',
    company_phone: '',
    company_email: '',
    supervisor_name: '',
    supervisor_phone: '',
    supervisor_email: '',
})

const { $api, $toast } = useNuxtApp()
const emit = defineEmits(['cancel'])
const queryClient = useQueryClient()

const createStudentIntern= () => {
  $api.intern.createIntern(form).then(() => {
    $toast.success('Đăng ký thực tập thành công')
    queryClient.invalidateQueries('intern')
    emit('cancel')
  })
}

const preview = () => {
  console.log('Preview')
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
