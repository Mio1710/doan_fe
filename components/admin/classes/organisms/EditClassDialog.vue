<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Lưu"
    title="Sửa lớp học phần"
    width="700px"
    @close="dialog = false"
    @submit="submit"
  >
    <class-form v-model="form" />
  </form-dialog>
</template>

<script>
import { defineComponent, reactive, ref, useContext, toRef } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import ClassForm from '@/components/admin/classes/molecules/ClassForm.vue'
import FormDialog from '@/components/common/organisms/FormDialog'

export default defineComponent({
  name: 'EditClassDialog',
  components: { FormDialog, ClassForm },

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
      /*
      const form = {
        id: state.form.id,
        name: state.form.name,
        code: state.form.code,
        image: state.form.image,
        image_url: state.form.image_url,
        khoaId: state.form.khoaId
      }
      */
      $api.classroom
        .updateClassroom(state.form.id, state.form)
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('classrooms')
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
