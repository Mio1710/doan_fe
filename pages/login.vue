<template>
  <div>
    <v-card class="text-center pa-1">
      <v-card-title class="justify-center display-1 mb-2">Đăng nhập</v-card-title>
      <v-card-subtitle>Đăng nhập</v-card-subtitle>

      <v-card-text>
        <app-form v-slot="{ handleSubmit }">
          <v-row dense>
            <v-col cols="12">
              <app-text-field
                v-model="form.maso"
                label="Mã số"
                rules="required"
                vid="maso"
                @keyup.enter="handleSubmit(submit)"
              />
              <v-subheader v-if="verifyError" v-html="verifyError" />
            </v-col>

            <v-col cols="12">
              <app-password
                v-model="form.matKhau"
                label="Mật khẩu"
                rules="required"
                @keyup.enter="handleSubmit(submit)"
              />
            </v-col>
          </v-row>

          <v-btn
            block
            color="primary"
            :disabled="isLoginDisabled"
            :loading="isLoading"
            small
            @click="handleSubmit(submit)"
          >
            Đăng nhập
          </v-btn>

          <div class="mt-3">
            <nuxt-link :to="{ name: 'register' }">Chưa có tài khoản?</nuxt-link>
          </div>
        </app-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import AppForm from '@/components/common/atoms/AppForm'
import AppTextField from '@/components/common/atoms/AppTextField'
import AppPassword from '@/components/common/atoms/AppPassword'

export default {
  components: {
    AppForm,
    AppTextField,
    AppPassword
  },
  layout: 'auth',
  data() {
    return {
      isLoading: false,
      isLoginDisabled: false,
      verifyError: '',
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit() {
      this.isLoading = true
      this.isLoginDisabled = true

      this.login(this.form)
    },
    login(data) {
      this.$auth
        .loginWith('local', {
          data: {
            maso: data.maso,
            matKhau: data.matKhau
          }
        })
        .then(({ data }) => {
          if (data.user.type === 'admin') {
            this.$router.push('/admin')
          } else if (data.user.type === 'teacher') {
            this.$router.push('/teacher')
          } else {
            this.$router.push('/student')
          }
        })
        .catch((err) => {
          console.log('Lỗi', err)
          this.verifyError = err.response.data?.error?.link
        })
        .finally(() => {
          this.isLoading = false
          this.isLoginDisabled = false
        })
    }
  }
}
</script>
