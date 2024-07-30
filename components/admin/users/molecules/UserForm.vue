<template>
  <v-row dense>
    <v-col cols="12">
      <app-text-field v-model="form.name" label="Tên" rules="required|max:50" vid="name" />
    </v-col>
    <v-col cols="12">
      <app-text-field
        v-model="form.email"
        autocomplete="new-email"
        label="Email"
        rules="required|email|max:50"
        vid="email"
      />
    </v-col>
    <v-col cols="12">
      <app-text-field v-model="form.phone" label="Số điện thoại" rules="required|max:50" vid="phone" />
    </v-col>
    <v-col cols="12">
      <app-password
        v-if="!form.id"
        v-model="form.password"
        autocomplete="new-password"
        label="Mật khẩu"
        rules="required|min:6|max:60"
        vid="password"
      />
    </v-col>
    <v-col cols="12">
      <app-password
        v-if="!form.id"
        v-model="form.password_confirmation"
        label="Xác nhận mật khẩu"
        rules="required|confirmed:password|min:6|max:60"
        type="password"
      />
    </v-col>
    <v-col cols="12">
      <app-textarea v-model="form.address" label="Địa chỉ" vid="address" />
    </v-col>
  </v-row>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import AppPassword from '~/components/common/atoms/AppPassword.vue'
import AppTextField from '~/components/common/atoms/AppTextField.vue'
import AppTextarea from '~/components/common/atoms/AppTextarea.vue'

export default defineComponent({
  name: 'UserForm',
  components: { AppTextarea, AppTextField, AppPassword },
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const form = computed({
      get: () => props.value,
      set: (val) => {
        emit('input', val)
      }
    })

    return {
      form
    }
  }
})
</script>
