<template>
  <form-order-dialog v-if="dialog" v-model="dialog" title="DUYỆT ĐƠN HÀNG" width="1000px" @close="dialog = false">
    <app-data-table v-model="selectedItems" class="elevation-1" :headers="headers" :items="items" :items-per-page="5">
      <template #item.index="{ index }">
        <span>{{ index + 1 }}</span>
      </template>
      <template #item.order_status="{ item }">
        <span>{{ item.order_status | orderStatus }}</span>
      </template>
      <template #item.created_at="{ item }">
        <span>{{ item.created_at | formatDate }}</span>
      </template>
      <template #item.action="{ item }">
        <v-list-item class="info--text" dense @click="detailApproveOrder(item)">
          <v-list-item-title>
            <v-icon color="info" left small>mdi-eye-outline</v-icon>
            <span>Xem chi tiết</span>
          </v-list-item-title>
        </v-list-item>
      </template>
    </app-data-table>
    <detail-approve-order-dialog ref="detailApproveOrderDialog" />
  </form-order-dialog>
</template>

<script>
import { defineComponent, reactive, toRef, ref, computed, useContext } from '@nuxtjs/composition-api'
import FormOrderDialog from '@/components/common/organisms/FormOrderDialog'
import AppDataTable from '@/components/common/atoms/AppDataTable'
import UseGetOrders from '@/composables/use-get-order'
import DetailApproveOrderDialog from '@/components/sale/organisms/DetailApproveOrderDialog'

export default defineComponent({
  name: 'ApproveOrders',
  components: { FormOrderDialog, AppDataTable, DetailApproveOrderDialog },
  layout: 'sale',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit, refs }) {
    const { $auth } = useContext()

    const dialog = computed({
      get: () => props.value,
      set: (val) => emit('input', val)
    })

    const query = ref({
      filters: {
        q: '',
        order_status: 1,
        supplier_id: $auth.user.id
      },
      sorts: '-created_at',
      page: 1,
      limit: 100
    })

    const { items, refetch, totalItems } = UseGetOrders(query)

    const state = reactive({
      headers: [
        { text: 'STT', value: 'index', align: 'left', sortable: false },
        { text: 'Customer', value: 'customer.name' },
        { text: 'OrderDate', value: 'created_at' },
        { text: 'Status', value: 'order_status' },
        { text: '', value: 'action', align: 'right', sortable: false }
      ],
      selectedItems: []
    })

    const detailApproveOrder = (item) => {
      refs.detailApproveOrderDialog.open(item, true)
    }

    return {
      dialog,
      headers: toRef(state, 'headers'),
      selectedItems: toRef(state, 'selectedItems'),
      items,
      refetch,
      totalItems,
      detailApproveOrder,
      query
    }
  }
})
</script>

<style scoped></style>
