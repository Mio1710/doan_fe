<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Lưu"
    title="Sửa thông tin khoa"
    width="700px"
    @close="dialog = false"
    @submit="submit"
  >
    <faculty-form v-model="form" is-update />
  </form-dialog>
</template>

<script>
import { defineComponent, reactive, ref, useContext, toRef } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import FormDialog from '@/components/common/organisms/FormDialog'
import FacultyForm from '~/components/admin/faculty/molecules/FacultyForm.vue'

export default defineComponent({
  name: 'EditFacultyDialog',
  components: { FacultyForm, FormDialog },

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
      $api.faculty
        .updateFaculty(state.form.id, state.form)
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('faculties')
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
