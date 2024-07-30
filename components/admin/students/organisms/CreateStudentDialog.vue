<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Lưu"
    title="Thêm sinh viên"
    width="700px"
    @close="dialog = false"
    @submit="createCategory"
  >
    <student-form v-model="form" />
  </form-dialog>
</template>

<script>
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import StudentForm from '@/components/admin/students/molecules/StudentForm.vue'
import FormDialog from '@/components/common/organisms/FormDialog'

export default defineComponent({
  name: 'CreateStudentDialog',
  components: { FormDialog, StudentForm },

  setup() {
    const dialog = ref(false)
    const { $api } = useContext()
    const queryClient = useQueryClient()
    const loading = ref(false)

    const initialForm = () => ({
      hodem: null,
      ten: null,
      maso: null,
      phone: null,
      email: null,
      matKhau: null,
      image: null,
      image_url: null,
      LopId: null,
      gvId: null
    })
    const form = ref(initialForm())

    const open = () => {
      dialog.value = true
      form.value = initialForm()
    }

    const createCategory = () => {
      loading.value = true
      $api.student
        .createStudent(form.value)
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('students')
        })
        .finally(() => {
          loading.value = false
        })
    }

    return {
      dialog,
      form,
      createCategory,
      loading,
      open
    }
  }
})
</script>

<style scoped></style>
