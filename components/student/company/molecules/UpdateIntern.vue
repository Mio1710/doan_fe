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
  <form-card
    can-cancel
    cancel-text="Hủy"
    title="Đăng ký thưc tập"
    @cancel="emit('cancel')"
    @submit="createStudentIntern"
  >
    <app-text-field v-model="form.company_name" label="Tên công ty" name="Tên công ty" rules="required" />
    <app-text-field v-model="form.company_email" label="Emai công ty" name="Emai công ty" type="textarea" />
    <app-text-field v-model="form.company_phone" label="SĐT công ty" name="SĐT công ty" />
    <app-text-field v-model="form.address" label="Địa chỉ công ty" name="Địa chỉ công ty" />
    <app-text-field v-model="form.supervisor_name" label="Tên người hướng dẫn" name="Tên người hướng dẫn" />
    <app-text-field
      v-model="form.supervisor_phone"
      label="Số điện thoại người hướng dẫn"
      name="Số điện thoại người hướng dẫn"
    />
    <app-text-field v-model="form.supervisor_email" label="Email người hướng dẫn" name="Email người hướng dẫn" />
  </form-card>
</template>
