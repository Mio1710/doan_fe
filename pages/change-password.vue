<template>
  <div>
    <change-password-dialog ref="changePassword" />
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRef, useContext } from '@nuxtjs/composition-api'
import ChangePasswordDialog from '~/components/web/organisms/ChangePasswordDialog.vue'

export default defineComponent({
  components: { ChangePasswordDialog },
  layout: 'empty',
  setup() {
    const initialState = () => ({
      form: {}
    })
    const { $api, $auth } = useContext()
    const state = reactive(initialState())
    const loading = ref(false)
    const isOpen = ref(false)

    const open = () => {
      isOpen.value = true
      state.form = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
    }

    const submit = () => {
      loading.value = true
      $api.auth
        .changePassword(state.form)
        .then(() => {
          isOpen.value = false
          $auth.logout()
        })
        .finally(() => {
          loading.value = false
        })
    }

    return {
      form: toRef(state, 'form'),
      loading,
      isOpen,
      open,
      submit
    }
  }
})
</script>
