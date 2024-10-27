<script setup lang="ts">
import { useQueryClient } from 'vue-query'
import FormCard from '~/components/common/molecules/FormCard.vue'
import AppTextField from '~/components/common/atoms/AppTextField.vue'
import TeacherAutocomplete from '~/components/common/atoms/TeacherAutocomplete.vue'
import StudentGroupAutocomplete from '~/components/common/atoms/StudentGroupAutocomplete.vue'
import TeacherGroupAutocomplete from '~/components/common/atoms/TeacherGroupAutocomplete.vue'

const form = reactive({
  teacher_group_id: null,
  student_group_ids: [],
})

const { $api, $toast } = useNuxtApp()
const emit = defineEmits(['cancel'])
const queryClient = useQueryClient()

const createFaculty = () => {
  $api.superTeacher.updateStudentGroupTeacher(form).then(() => {
    $toast.success('Phân giảng viên phản biện thành công')
    queryClient.invalidateQueries('student-group')
    emit('cancel')
  })
}
</script>

<template>
  <form-card can-cancel cancel-text="Hủy" title="Tạo nhóm" @cancel="emit('cancel')" @submit="createFaculty">
    <teacher-group-autocomplete v-model="form.teacher_group_id" name="Nhóm giảng viên phản biện" rules="required" />
    <student-group-autocomplete
      v-model="form.student_group_ids"
      :multiple="true"
      name="Nhóm sinh viên"
      rules="required"
    />
  </form-card>
</template>
