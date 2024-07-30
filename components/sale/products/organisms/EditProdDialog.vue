<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Lưu"
    title="Chi tiết sản phẩm"
    width="700px"
    @close="dialog = false"
    @submit="submit"
  >
    <product-form v-model="form" is-update />
  </form-dialog>
</template>

<script>
import { defineComponent, reactive, ref, useContext, toRef } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import { serialize } from 'object-to-formdata'
import ProductForm from '@/components/sale/products/molecules/ProductForm'
import FormDialog from '@/components/common/organisms/FormDialog'

export default defineComponent({
  name: 'EditProdDialog',
  components: { FormDialog, ProductForm },

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
      const form = {
        id: state.form.id,
        brand_id: state.form.brand_id,
        category_id: state.form.category_id,
        supplier_id: state.form.supplier_id,
        name: state.form.name,
        quantity: state.form.quantity,
        price: state.form.price,
        description: state.form.description,
        image: state.form.image,
        image_url: state.form.image_url
      }
      $api.product
        .updateProd(state.form.id, serialize(form))
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('products')
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
