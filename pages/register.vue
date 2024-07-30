<template>
  <div>
    <v-card class="text-center pa-1">
      <v-card-title class="justify-center display-1 mb-2">Đăng Ký</v-card-title>
      <v-card-subtitle>Đăng ký</v-card-subtitle>

      <v-card-text>
        <app-form v-slot="{ handleSubmit }">
          <v-row dense>
            <v-col cols="12">
              <app-text-field
                v-model="form.name"
                label="Tên"
                rules="required"
                vid="name"
                @keyup.enter="handleSubmit(submit)"
              />
            </v-col>
            <v-col cols="12">
              <app-text-field
                v-model="form.email"
                label="Email"
                rules="required|email"
                vid="email"
                @keyup.enter="handleSubmit(submit)"
              />
            </v-col>

            <v-col cols="12">
              <app-password
                v-model="form.password"
                autocomplete="new-password"
                label="Mật khẩu"
                rules="required|hardPassWord|min:8"
                vid="password"
                @keyup.enter="handleSubmit(submit)"
              />
            </v-col>
            <v-col cols="12">
              <app-password
                v-model="form.password_confirmation"
                label="Xác nhận mật khẩu"
                rules="required|confirmed:password"
                @keyup.enter="handleSubmit(submit)"
              />
            </v-col>
          </v-row>

          <v-btn block color="primary" :loading="isLoading" small @click="handleSubmit(submit)">Đăng Ký</v-btn>
        </app-form>
        <div class="mt-3">
          <span>Bạn đã có tài khoản?</span>
          <nuxt-link to="/login">Đăng nhập</nuxt-link>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { defineComponent, ref, useContext, useRouter } from '@nuxtjs/composition-api'
import AppForm from '@/components/common/atoms/AppForm'
import AppTextField from '@/components/common/atoms/AppTextField'
import AppPassword from '@/components/common/atoms/AppPassword'

export default defineComponent({
  components: {
    AppForm,
    AppTextField,
    AppPassword
  },
  layout: 'auth',

  setup() {
    const form = ref({
      email: '',
      name: '',
      password: '',
      password_confirmation: ''
    })
    const { $api } = useContext()
    const isLoading = ref(false)
    const router = useRouter()

    const submit = () => {
      isLoading.value = true
      $api.auth
        .createUser(form.value)
        .then(() => {
          router.push('/login')
        })
        .finally(() => {
          isLoading.value = false
        })
    }

    return {
      form,
      submit,
      isLoading
    }
  }
})
</script>
