<template>
  <v-row dense>
    <v-col cols="12">
      <app-text-field v-model="form.order_code" label="Mã đơn hàng" :readonly="allowEdit" vid="code" />
    </v-col>
    <v-col cols="12">
      <app-text-field v-model="form.customer.name" label="Tên khách hàng" :readonly="allowEdit" vid="name" />
    </v-col>
    <v-col cols="12">
      <app-text-field v-model="form.address" label="Địa chỉ" :readonly="allowEdit" vid="address" />
    </v-col>
    <v-col cols="12">
      <app-text-field v-model="form.created_at" label="Ngày đặt" :readonly="allowEdit" vid="order_date" />
    </v-col>
    <v-col cols="12">
      <delivery-autocomplete
        v-model="form.delivery_method_id"
        label="Phương thức giao hàng"
        :readonly="allowEdit"
        vid="delivery_method"
      />
    </v-col>
    <v-col cols="12">
      <app-currency v-model="form.total_price" label="Tổng tiền" :readonly="allowEdit" vid="total_price" />
    </v-col>
    <v-col cols="12">
      <app-text-field v-model="form.order_status" label="Trạng thái đơn hàng" :readonly="allowEdit" vid="status" />
    </v-col>
  </v-row>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import AppTextField from '@/components/common/atoms/AppTextField'
import DeliveryAutocomplete from '~/components/common/share/DeliveryAutocomplete.vue'
import AppCurrency from '~/components/common/atoms/AppCurrency.vue'
export default defineComponent({
  name: 'OrderForm',
  components: { AppCurrency, DeliveryAutocomplete, AppTextField },
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    allowEdit: {
      type: Boolean,
      default: false
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
