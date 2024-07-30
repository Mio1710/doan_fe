<template>
  <v-row dense>
    <v-col cols="12">
      <app-text-field v-model="form.name" label="Tên loại sản phẩm" rules="required|max:100" vid="name" />
    </v-col>
    <v-col cols="12">
      <app-text-field v-model="form.code" label="Mã loại sản phẩm" rules="required|max:100" vid="code" />
    </v-col>
  </v-row>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import AppTextField from '@/components/common/atoms/AppTextField.vue'

export default defineComponent({
  name: 'CategoryForm',
  components: { AppTextField },
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
