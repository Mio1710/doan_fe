<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Lưu"
    title="Tạo phương thức vận chuyển"
    width="700px"
    @close="dialog = false"
    @submit="submit"
  >
    <shipping-method-form v-model="form" />
  </form-dialog>
</template>

<script>
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import FormDialog from '@/components/common/organisms/FormDialog'
import ShippingMethodForm from '~/components/admin/shipping-methods/molecules/ShippingMethodForm'

export default defineComponent({
  name: 'CreateShippingMethodDialog',
  components: { ShippingMethodForm, FormDialog },

  setup() {
    const dialog = ref(false)
    const { $api } = useContext()
    const queryClient = useQueryClient()
    const loading = ref(false)

    const form = ref({
      name: null,
      price: 0
    })

    const open = () => {
      dialog.value = true
    }

    const submit = () => {
      loading.value = true
      $api.deliveryMethod
        .createDeliveryMethod(form.value)
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('shipping-methods')
        })
        .finally(() => {
          loading.value = false
        })
    }

    return {
      dialog,
      form,
      submit,
      loading,
      open
    }
  }
})
</script>

<style scoped></style>
