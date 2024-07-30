<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Lưu"
    title="Tạo phương thức thanh toán"
    width="700px"
    @close="dialog = false"
    @submit="submit"
  >
    <payment-method-form v-model="form" />
  </form-dialog>
</template>

<script>
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import FormDialog from '@/components/common/organisms/FormDialog'
import PaymentMethodForm from '~/components/admin/payment-methods/molecules/PaymentMethodForm'

export default defineComponent({
  name: 'CreatePaymentMethodDialog',
  components: { PaymentMethodForm, FormDialog },

  setup() {
    const dialog = ref(false)
    const { $api } = useContext()
    const queryClient = useQueryClient()
    const loading = ref(false)

    const form = ref({
      code: null,
      name: null
    })

    const open = () => {
      dialog.value = true
    }
    const submit = () => {
      loading.value = true
      $api.paymentMethod
        .createPaymentMethod(form.value)
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('Payment-methods')
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
