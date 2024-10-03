<script setup lang="ts">
import { useQueryClient } from 'vue-query'
import FormCard from '~/components/common/molecules/FormCard.vue'
import AppTextField from '~/components/common/atoms/AppTextField.vue'

const form = reactive({
  ten: '',
  description: '',
  requirement: '',
  knowledge: '',
})

const { $api, $toast } = useNuxtApp()
const emit = defineEmits(['cancel'])
const queryClient = useQueryClient()

const createStudentTopic = () => {
  $api.topic.createTopic(form).then(() => {
    $toast.success('Tạo đề tài thành công')
    queryClient.invalidateQueries('topic')
    emit('cancel')
  })
}

const preview = () => {
  console.log('Preview')
}
</script>

<template>
  <form-card can-cancel cancel-text="Hủy" title="Tạo đề tài" @cancel="emit('cancel')" @submit="createStudentTopic">
    <app-text-field v-model="form.ten" name="Tên đề tài" rules="required" />
    <app-text-field v-model="form.description" name="Mô tả" type="textarea" />
    <app-text-field v-model="form.requirement" name="Yêu cầu" />
    <app-text-field v-model="form.knowledge" name="Kiến thức kỹ năng " />
  </form-card>
</template>
