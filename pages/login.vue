<script setup lang="ts">
import AppTextField from '~/components/common/atoms/AppTextField.vue'
import AppForm from '~/components/common/molecules/AppForm.vue'
import AppPassword from '~/components/common/atoms/AppPassword.vue'
const form = reactive({
  maso: '',
  matkhau: '',
  type: null,
})
const loading = ref(false)
const { signIn } = useAuth()
const { $toast } = useNuxtApp()
const onSubmit = () => {
  loading.value = true
  signIn(form, {
    callbackUrl: '/',
    redirect: true,
  })
    .catch(() => {
      $toast.error('Đăng nhập không thành công. Vui lòng thử lại!')
    })
    .finally(() => {
      loading.value = false
    })
}
</script>
<template>
  <v-card class="m-auto w-100 px-6 py-8" max-width="500" min-width="344">
    <app-form v-slot="{ handleSubmit }">
      <app-text-field v-model="form.maso" class="mb-5" label="Mã số" name="Mã số" rules="required" />

      <app-password v-model="form.matkhau" label="Mật khẩu" name="Mật khẩu" rules="required" type="password" />
      <v-checkbox v-model="form.type" label="Bạn là giáo viên" name="Bạn là giáo viên" value="teacher" />
      <v-btn block color="success" :loading="loading" size="large" variant="elevated" @click="handleSubmit(onSubmit)">
        Sign In
      </v-btn>
    </app-form>
  </v-card>
</template>
