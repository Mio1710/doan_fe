<script setup lang="ts">
import FormCard from '~/components/common/molecules/FormCard.vue'
import AppPassword from '~/components/common/atoms/AppPassword.vue'

defineProps({
  user: {
    type: Object,
    required: true,
  },
})
const form = ref({
  old_password: null,
  new_password: null,
  confirm_password: null,
})

const { $api, $toast } = useNuxtApp()
const updatePassword = () => {
  console.log(form.value)
}
</script>

<template>
  <v-dialog min-width="400" width="40%">
    <template #activator="{ props: activatorProps }">
      <div variant="plain" v-bind="activatorProps">
        <span>Đổi mật khẩu</span>
      </div>
    </template>
    <template #default="{ isActive }">
      <form-card
        can-cancel
        cancel-text="Hủy"
        title="Đổi mật khẩu"
        @cancel="isActive.value = false"
        @submit="updatePassword"
      >
        <app-password v-model="form.old_password" label="Mật khẩu cũ" name="oldPassword" rules="required" />
        <app-password v-model="form.new_password" label="Mật khẩu mới" name="newPassword" rules="required" />
        <app-password
          v-model="form.confirm_password"
          label="Xác nhận mật khẩu"
          name="confirmPassword"
          rules="required|confirmed:@newPassword"
        />
      </form-card>
    </template>
  </v-dialog>
</template>

<style scoped></style>
