<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Lưu"
    title="Sửa giảng viên"
    width="700px"
    @close="dialog = false"
    @submit="submit"
  >
    <teacher-form v-model="form" />
  </form-dialog>
</template>

<script>
import { defineComponent, reactive, ref, useContext, toRef } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
// import { serialize } from 'object-to-formdata'
import FormDialog from '@/components/common/organisms/FormDialog'
import TeacherForm from '~/components/admin/teacher/molecules/TeacherForm.vue'

export default defineComponent({
  name: 'EditTeacherDialog',
  components: { TeacherForm, FormDialog },

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
      // const form = {
      //   id: state.form.id,
      //   hodem: state.form.hodem,
      //   ten: state.form.ten,
      //   maso: state.form.maso,
      //   email: state.form.email,
      //   phone: state.form.phone,
      //   matKhau: state.form.matKhau,
      //   image: state.form.image,
      //   image_url: state.form.image_url,
      //   maKhoa: state.form.maKhoa
      // }
      $api.user
        .updateUser(state.form.id, state.form)
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('teachers')
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
