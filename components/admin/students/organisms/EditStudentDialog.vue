<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Lưu"
    title="Sửa sinh viên"
    width="700px"
    @close="dialog = false"
    @submit="submit"
  >
    <student-form v-model="form" is-update />
  </form-dialog>
</template>

<script>
import { defineComponent, reactive, ref, useContext, toRef } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import FormDialog from '@/components/common/organisms/FormDialog'
import StudentForm from '@/components/admin/students/molecules/StudentForm.vue'

export default defineComponent({
  name: 'EditStudentDialog',
  components: { StudentForm, FormDialog },

  setup() {
    const initialState = () => ({
      form: {}
    })
    const { $api } = useContext()
    const state = reactive(initialState())
    const loading = ref(false)
    const dialog = ref(false)
    const queryClient = useQueryClient()

    const open = (item) => {
      dialog.value = true
      state.form = Object.assign({}, item)
    }

    const submit = () => {
      loading.value = true
      $api.student
        .updateStudent(state.form.id, state.form)
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('students')
        })
        .finally(() => {
          loading.value = false
        })
    }

    return {
      form: toRef(state, 'form'),
      loading,
      dialog,
      open,
      submit
    }
  }
})
</script>

<style scoped></style>
