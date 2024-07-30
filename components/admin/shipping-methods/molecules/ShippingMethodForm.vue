<template>
  <v-row dense>
    <v-col cols="12">
      <app-text-field
        v-model="form.name"
        label="Tên phương thức vận chuyển"
        :readonly="!allowEdit"
        rules="required|max:100"
        vid="name"
      />
    </v-col>
    <v-col cols="12">
      <app-currency
        v-model="form.price"
        label="Giá"
        :readonly="!allowEdit"
        rules="required|min_value:1000|numeric"
        vid="price"
      />
    </v-col>
  </v-row>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import AppTextField from '~/components/common/atoms/AppTextField.vue'
import AppCurrency from '~/components/common/atoms/AppCurrency.vue'

export default defineComponent({
  name: 'ShippingMethodForm',
  components: { AppCurrency, AppTextField },
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    allowEdit: {
      type: Boolean,
      default: true
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
