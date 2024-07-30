<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Lưu"
    title="Chi tiết đơn hàng"
    width="700px"
    @close="dialog = false"
    @submit="dialog = false"
  >
    <order-form v-model="form" :allow-edit="allowEdit" is-update />
  </form-dialog>
</template>

<script>
import { defineComponent, reactive, ref, useContext, toRef } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import FormDialog from '@/components/common/organisms/FormDialog'
import OrderForm from '@/components/sale/molecules/OrderForm'

export default defineComponent({
  name: 'EditOrderDialog',
  components: { OrderForm, FormDialog },

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
      $api.order
        .updateOrder(state.form.id, state.form)
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('orders')
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
