<template>
  <v-row dense>
    <v-col cols="12">
      <v-card class="pa-2">
        <v-card-text class="px-0 pb-0">
          <app-file-input v-model="form.report_file" label="File báo cáo" />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="12">
          <app-text-field v-model="form.commit" label="Bình luận" vid="commit" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import AppTextField from '@/components/common/atoms/AppTextField.vue'
import AppFileInput from '~/components/common/atoms/AppFileInput.vue'

export default defineComponent({
  name: 'FileForm',
  components: { AppTextField, AppFileInput },
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
      emit('change', file)
    }

    return {
      form,
      onFileChange
    }
  }
})
</script>
