<template>
  <v-row dense>
    <v-col cols="6">
      <div class="d-flex justify-center">
        <div class="rounded-circle overflow-hidden h-[150px] w-[150px] bg-amber-300">
          <v-img height="100%" max-height="100%" :src="form.image_url | userImageDefault" />
        </div>
      </div>
      <v-card class="pa-2">
        <v-card-text class="px-0 pb-0">
          <app-file-input
            v-model="form.image"
            accept="image/jpg, image/jpeg, image/png"
            label="Image"
            :rules="form.image_url ? '' : 'required'"
            @change="onFileChange"
          />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-row>
        <v-col cols="12">
          <app-text-field v-model="form.maso" label="Mã giảng viên" rules="required|max:100" vid="maso" />
        </v-col>
        <v-col cols="12">
          <app-text-field v-model="form.hodem" label="Họ đệm" rules="required|max:100" vid="hodem" />
        </v-col>
        <v-col cols="12">
          <app-text-field v-model="form.ten" label="Tên giảng viên" rules="required|max:100" vid="ten" />
        </v-col>
        <v-col cols="12">
          <app-text-field
            v-model="form.email"
            autocomplete="newEmail"
            label="Email"
            rules="required|email"
            vid="email"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="6">
      <app-text-field v-model="form.phone" label="Số điện thoại" vid="sdt" />
    </v-col>
    <v-col cols="6">
      <faculty-autocomplete v-model="form.khoaId" label="Khoa" :ma-khoa="form.khoaId" rules="required" vid="khoaId" />
    </v-col>
    <v-col cols="6">
      <app-password v-model="form.matKhau" label="Mật khẩu" rules="required" vid="matKhau" />
    </v-col>
  </v-row>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import AppTextField from '@/components/common/atoms/AppTextField.vue'
import FacultyAutocomplete from '~/components/common/share/FacultyAutocomplete.vue'
import AppPassword from '~/components/common/atoms/AppPassword.vue'
import AppFileInput from '~/components/common/atoms/AppFileInput.vue'

export default defineComponent({
  name: 'TeacherForm',
  components: { AppFileInput, AppPassword, FacultyAutocomplete, AppTextField },
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

    const onFileChange = (file) => {
      if (file) {
        form.value.image_url = URL.createObjectURL(file)
        URL.revokeObjectURL(file)
      } else {
        form.value.image_url = null
      }
    }

    return {
      form,
      onFileChange
    }
  }
})
</script>
