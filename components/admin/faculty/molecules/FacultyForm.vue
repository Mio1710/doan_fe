<template>
  <v-row dense>
    <v-col cols="12">
      <app-text-field v-model="form.maKhoa" label="Mã khoa" rules="required|max:10" vid="maKhoa" />
    </v-col>
    <v-col cols="12">
      <app-text-field v-model="form.ten" label="Tên khoa" rules="required|max:100" vid="ten" />
    </v-col>
  </v-row>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import AppTextField from '@/components/common/atoms/AppTextField.vue'

export default defineComponent({
  name: 'FacultyForm',
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
