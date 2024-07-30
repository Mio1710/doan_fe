<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Lưu"
    title="Thêm Khoa"
    width="700px"
    @close="dialog = false"
    @submit="createCategory"
  >
    <faculty-form v-model="form" />
  </form-dialog>
</template>

<script>
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import FormDialog from '@/components/common/organisms/FormDialog'
import FacultyForm from '~/components/admin/faculty/molecules/FacultyForm.vue'

export default defineComponent({
  name: 'CreateFacultyDialog',
  components: { FacultyForm, FormDialog },

  setup() {
    const dialog = ref(false)
    const { $api } = useContext()
    const queryClient = useQueryClient()
    const loading = ref(false)

    const initialForm = () => ({
      ten: null,
      maKhoa: null
    })
    const form = ref(initialForm())

    const open = () => {
      dialog.value = true
      form.value = initialForm()
    }

    const createCategory = () => {
      loading.value = true
      $api.faculty
        .createFaculty(form.value)
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('faculties')
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
