<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Lưu"
    title="Thêm Giảng viên"
    width="700px"
    @close="dialog = false"
    @submit="createBrand"
  >
    <teacher-form v-model="form" />
  </form-dialog>
</template>

<script>
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import FormDialog from '@/components/common/organisms/FormDialog'
import TeacherForm from '~/components/admin/teacher/molecules/TeacherForm.vue'

export default defineComponent({
  name: 'CreateTeacherDialog',
  components: { TeacherForm, FormDialog },

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
      khoaId: null,
      type: 'teacher'
    })
    const form = ref(initialForm())

    const open = () => {
      dialog.value = true
      form.value = initialForm()
    }

    const createBrand = () => {
      loading.value = true
      $api.user
        .createUser(form.value)
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('teachers')
        })
        .finally(() => {
          loading.value = false
        })
    }

    return {
      dialog,
      form,
      createBrand,
      loading,
      open
    }
  }
})
</script>

<style scoped></style>
