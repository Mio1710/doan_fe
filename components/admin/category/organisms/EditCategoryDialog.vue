<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Lưu"
    title="Chi tiết loại sản phẩm"
    width="700px"
    @close="dialog = false"
    @submit="submit"
  >
    <category-form v-model="form" is-update />
  </form-dialog>
</template>

<script>
import { defineComponent, reactive, ref, useContext, toRef } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import CategoryForm from '@/components/admin/category/molecules/CategoryForm'
import FormDialog from '@/components/common/organisms/FormDialog'

export default defineComponent({
  name: 'EditCategoryDialog',
  components: { FormDialog, CategoryForm },

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
      $api.category
        .updateCategory(state.form.id, state.form)
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('categories')
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
