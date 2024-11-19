<script setup lang="ts">
import { useQueryClient } from 'vue-query'
import FormCard from '~/components/common/molecules/FormCard.vue'
import AppTextField from '~/components/common/atoms/AppTextField.vue'

const props = defineProps({
  teacher: {
    type: Object,
    required: true,
  },
})

const form = ref({ ...props.teacher })

const { $api, $toast } = useNuxtApp()
const emit = defineEmits(['cancel'])
const queryClient = useQueryClient()

const updateTeacher = () => {
  $api.admin.updateTeacher(form.value.id, form.value).then(() => {
    $toast.success('Cập nhật giảng viên thành công')
    queryClient.invalidateQueries('topic')
    emit('cancel')
  })
}
</script>

<template>
  <form-card can-cancel cancel-text="Hủy" title="Cập nhật giảng viên" @cancel="emit('cancel')" @submit="updateTeacher">
    <app-text-field v-model="form.hodem" label="Họ đệm" name="Họ đệm" rules="required" />
    <app-text-field v-model="form.ten" label="Tên giảng viên" name="Tên giảng viên" rules="required" />
    <app-text-field v-model="form.email" label="Email" name="Email" rules="required|email" />
    <app-text-field v-model="form.maso" label="Mã số" name="Mã số" rules="required" />
    <div class="d-flex">
      <v-switch color="success" hide-details label="Cán bộ môn" :model-value="form.roles" value="super_teacher" />
      <v-spacer />
      <v-switch color="success" hide-details label="Cán bộ khoa" :model-value="form.roles" value="admin" />
    </div>
  </form-card>
</template>
