<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Lưu"
    title="Thông tin cá nhân"
    width="800px"
    @close="dialog = false"
    @submit="submit"
  >
    <v-row>
      <v-col cols="6">
        <app-text-field
          v-model="form.name"
          autocomplete="new-name"
          label="Tên người nhận"
          rules="required|max:255"
          vid="name"
        />
      </v-col>
      <v-col cols="6">
        <app-text-field v-model="form.phone" label="Số điện thoại" rules="required|min:10|max:11" />
      </v-col>
      <v-col cols="12">
        <app-text-field v-model="form.address" label="Địa chỉ" rules="required|max:255" />
      </v-col>
    </v-row>
  </form-dialog>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import FormDialog from '@/components/common/organisms/FormDialog'
import AppTextField from '@/components/common/atoms/AppTextField'

export default defineComponent({
  name: 'UpdateAddressDialog',
  components: { AppTextField, FormDialog },
  props: {
    address: {
      type: Object,
      required: true
    }
  },

  setup(props, { emit }) {
    const form = ref({})
    const loading = ref(false)
    const dialog = ref(false)

    const open = () => {
      dialog.value = true
      form.value = Object.assign({}, props.address)
    }

    const submit = () => {
      loading.value = true
      emit('update', form.value)
      dialog.value = false
    }

    return {
      form,
      loading,
      dialog,
      open,
      submit
    }
  }
})
</script>

<style scoped></style>
