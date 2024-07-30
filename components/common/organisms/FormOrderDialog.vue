<template>
  <v-dialog v-model="dialog" max-width="1140px" persistent scrollable :width="width">
    <form-card
      v-bind="$attrs"
      cancel-text="Đóng"
      :hide-submit="hideSubmit"
      :loading="loading"
      @cancel="close"
      @submit="submit"
    >
      <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />
    </form-card>
  </v-dialog>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import FormCard from '@/components/common/molecules/FormCard'

export default defineComponent({
  name: 'FormOrderDialog',
  components: {
    FormCard
  },
  props: {
    value: Boolean,
    width: {
      type: [String, Number],
      default: 'auto'
    },
    hideSubmit: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const dialog = computed({
      get: () => props.value,
      set: (val) => {
        return emit('input', val)
      }
    })

    const submit = () => {
      emit('submit')
    }

    const close = () => {
      emit('close')
      dialog.value = false
    }

    return {
      dialog,
      submit,
      close
    }
  }
})
</script>
