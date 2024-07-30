<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Lưu"
    title="Tạo người dùng"
    width="700px"
    @close="dialog = false"
    @submit="createUser"
  >
    <user-form v-model="form" />
  </form-dialog>
</template>

<script>
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import UserForm from '@/components/admin/users/molecules/UserForm'
import FormDialog from '@/components/common/organisms/FormDialog'

export default defineComponent({
  name: 'CreateUserDialog',
  components: { FormDialog, UserForm },

  setup() {
    const dialog = ref(false)
    const { $api } = useContext()
    const queryClient = useQueryClient()
    const loading = ref(false)

    const form = ref({
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      address: null
    })

    const open = () => {
      dialog.value = true
    }

    const createUser = () => {
      loading.value = true
      $api.user
        .createUser(form.value)
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('users')
        })
        .finally(() => {
          loading.value = false
        })
    }

    return {
      dialog,
      form,
      createUser,
      loading,
      open
    }
  }
})
</script>

<style scoped></style>
