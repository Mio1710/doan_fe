<template>
  <div>
    <div v-if="notification" class="success-notification">
      <strong style="color: #2196f3; text-align: center">{{ notification }}</strong>
    </div>

    <form-dialog
      v-if="dialog"
      v-model="dialog"
      :loading="loading"
      submit-text="Lưu"
      title="Thêm sản phẩm"
      width="700px"
      @close="dialog = false"
      @submit="createProd"
    >
      <product-form v-model="form" />
    </form-dialog>
  </div>
</template>

<script>
import { defineComponent, ref, useContext, watch } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import { serialize } from 'object-to-formdata'
import ProductForm from '@/components/sale/products/molecules/ProductForm'
import FormDialog from '@/components/common/organisms/FormDialog'

export default defineComponent({
  name: 'CreateProdDialog',
  components: { FormDialog, ProductForm },

  setup() {
    const dialog = ref(false)
    const { $api } = useContext()
    const queryClient = useQueryClient()
    const loading = ref(false)
    const notification = ref(null)
    const initialForm = () => ({
      brand_id: null,
      category_id: null,
      name: null,
      image_url: null,
      quantity: null,
      price: null,
      description: null,
      image: null
    })

    const form = ref(initialForm)

    const open = () => {
      dialog.value = true
      form.value = initialForm()
    }

    const createProd = () => {
      loading.value = true
      $api.product
        .createProd(serialize(form.value))
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('products')
          // Set success notification message
          notification.value = 'Sản phẩm đã được thêm thành công'
        })
        .finally(() => {
          loading.value = false
        })
    }
    watch(notification, (newVal) => {
      if (newVal) {
        setTimeout(() => {
          notification.value = null
        }, 3000)
      }
    })

    return {
      dialog,
      form,
      createProd,
      loading,
      open,
      notification
    }
  }
})
</script>

<style scoped>
.success-notification {
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 999;
}
</style>
