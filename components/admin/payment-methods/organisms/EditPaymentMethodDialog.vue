<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Lưu"
    title="Chi tiết phương thức thanh toán"
    width="700px"
    @close="dialog = false"
    @submit="submit"
  >
    <payment-method-form v-model="form" :allow-edit="allowEdit" is-update />
  </form-dialog>
</template>

<script>
import { defineComponent, reactive, ref, useContext, toRef } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import FormDialog from '@/components/common/organisms/FormDialog'
import PaymentMethodForm from '@/components/admin/payment-methods/molecules/PaymentMethodForm'

export default defineComponent({
  name: 'EditPaymentMethodDialog',
  components: { PaymentMethodForm, FormDialog },

  setup() {
    const initialState = () => ({
      form: {}
    })
    const { $api } = useContext()
    const state = reactive(initialState())
    const loading = ref(false)
    const dialog = ref(false)
    const queryClient = useQueryClient()
    const allowEdit = ref(true)

    const open = (item, allow = false) => {
      dialog.value = true
      allowEdit.value = allow
      state.form = Object.assign({}, item)
    }

    const submit = () => {
      loading.value = true
      $api.paymentMethod
        .updatePaymentMethod(state.form.id, state.form)
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('Payment-methods')
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
      submit,
      allowEdit
    }
  }
})
</script>

<style scoped></style>
