<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Lưu"
    title="Thêm lớp học phần"
    width="700px"
    @close="dialog = false"
    @submit="createBrand"
  >
    <class-form v-model="form" />
  </form-dialog>
</template>

<script>
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import ClassForm from '@/components/admin/classes/molecules/ClassForm.vue'
import FormDialog from '@/components/common/organisms/FormDialog'

export default defineComponent({
  name: 'CreateClassDialog',
  components: { FormDialog, ClassForm },

  setup() {
    const dialog = ref(false)
    const { $api, $moment } = useContext()
    const queryClient = useQueryClient()
    const loading = ref(false)

    const initialForm = () => ({
      ten: null,
      maLop: null,
      khoaId: null,
      gvId: null,
      startDate: $moment().format('YYYY-MM-DD'),
      endDate: $moment().format('YYYY-MM-DD')
    })
    const form = ref(initialForm())

    const open = () => {
      dialog.value = true
      form.value = initialForm()
    }

    const createBrand = () => {
      loading.value = true
      $api.classroom
        .createClassroom(form.value)
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('classrooms')
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
