<script setup lang="ts">
import AppTextField from '~/components/common/atoms/AppTextField.vue'
import AppForm from '~/components/common/molecules/AppForm.vue'
import TeacherAutocomplete from "~/components/common/atoms/TeacherAutocomplete.vue";

definePageMeta({
  layout: 'auth',
})

const form = reactive({
  ten: '',
  description: '',
  requirement: '',
  knowledge: '',
  teacher_id: null
})

const loading = ref(false)
const onSubmit = () => {
  console.log('Submit')
}
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-full">
    <div class="text-lg font-bold text-uppercase">Đề xuất đề tài đồ án</div>
    <v-card class="pa-3 h-full" color="white" variant="flat">
      <app-form v-slot="{ handleSubmit }">
        <app-text-field v-model="form.ten" name="Tên đề tài" label="Tên đề tài" rules="required" />
        <app-text-field v-model="form.description" name="Mô tả" label="Mô tả" type="textarea" />
        <teacher-autocomplete v-model="form.teacher_id" name="Giảng viên" rules="required" class="mb-4" />
        <app-text-field v-model="form.knowledge" name="Kiến thức kỹ năng " label="Kiến thức kỹ năng" />
        <div class="text-center">
          <v-btn
            color="success"
            :loading="loading"
            size="small"
            variant="elevated"
            @click="handleSubmit(onSubmit)"
          >
            Đăng ký
          </v-btn>
        </div>
      </app-form>
    </v-card>
  </div>
</template>

<style scoped></style>
