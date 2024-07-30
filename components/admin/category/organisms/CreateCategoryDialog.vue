<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Lưu"
    title="Thêm loại sản phẩm"
    width="700px"
    @close="dialog = false"
    @submit="createCategory"
  >
    <category-form v-model="form" />
  </form-dialog>
</template>

<script>
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import CategoryForm from '@/components/admin/category/molecules/CategoryForm'
import FormDialog from '@/components/common/organisms/FormDialog'

export default defineComponent({
  name: 'CreateCategoryDialog',
  components: { FormDialog, CategoryForm },

  setup() {
    const dialog = ref(false)
    const { $api } = useContext()
    const queryClient = useQueryClient()
    const loading = ref(false)

    const initialForm = () => ({
      name: null,
      code: null
    })
    const form = ref(initialForm())

    const open = () => {
      dialog.value = true
      form.value = initialForm()
    }

    const createCategory = () => {
      loading.value = true
      $api.category
        .createCategory(form.value)
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('categories')
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
