<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="px-3 d-flex">
      <div class="app-filter d-flex gap-3">
        <v-text-field v-model="query.filters.q" class="filter-component" dense hide-details label="Tìm kiếm" outlined />
      </div>
      <v-spacer />
      <v-btn color="primary" small @click="createPaymentMethod">
        <v-icon left small>mdi-plus</v-icon>
        Tạo phương thức thanh toán
      </v-btn>
    </div>
    <div class="pa-2">
      <app-data-table v-model="selectedItems" class="elevation-1" :headers="headers" :items="items" :items-per-page="5">
        <template #item.index="{ index }">
          <span>{{ index + 1 }}</span>
        </template>
        <template #item.created_at="{ date }">
          <span>{{ date }}</span>
        </template>
        <template #item.action="{ item }">
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <v-btn v-bind="attrs" icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item class="info--text" dense @click="detailPaymentMethod(item)">
                <v-list-item-title>
                  <v-icon color="info" left small>mdi-eye-outline</v-icon>
                  <span>Xem chi tiết</span>
                </v-list-item-title>
              </v-list-item>
              <v-list-item class="error--text" dense @click="deletePaymentMethod(item)">
                <v-list-item-title>
                  <v-icon color="error" left small>mdi-delete-outline</v-icon>
                  <span>Xóa</span>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </app-data-table>
      <create-payment-method-dialog ref="createPaymentMethodDialog" />
      <edit-payment-method-dialog ref="editPaymentMethodDialog" />
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRef, useContext } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import AppDataTable from '@/components/common/molecules/AppDataTable'
import UseGetPaymentMethods from '@/composables/use-get-payment-method'
import CreatePaymentMethodDialog from '@/components/admin/payment-methods/organisms/CreatePaymentMethodDialog'
import EditPaymentMethodDialog from '@/components/admin/payment-methods/organisms/EditPaymentMethodDialog'

export default defineComponent({
  components: {
    EditPaymentMethodDialog,
    CreatePaymentMethodDialog,
    AppDataTable
  },
  setup(_, { refs }) {
    const { $api } = useContext()
    const queryClient = useQueryClient()
    const query = ref({
      filters: {
        q: ''
      },
      sorts: '-created_at',
      page: 1,
      limit: 100
    })

    const { items, refetch, totalItems } = UseGetPaymentMethods(query)

    const state = reactive({
      headers: [
        { text: '#', value: 'index', align: 'left', sortable: false },
        { text: 'Tên', value: 'name' },
        { text: 'Mã', value: 'code' },
        { text: '', value: 'action', align: 'right', sortable: false }
      ],
      selectedItems: []
    })
    const dialog = ref(false)

    const createPaymentMethod = () => {
      refs.createPaymentMethodDialog.open()
    }

    const detailPaymentMethod = (item) => {
      refs.editPaymentMethodDialog.open(item, true)
    }

    const deletePaymentMethod = (data) => {
      $api.paymentMethod.deletePaymentMethod(data.id).then(() => {
        queryClient.invalidateQueries('payment-methods')
      })
    }

    return {
      headers: toRef(state, 'headers'),
      selectedItems: toRef(state, 'selectedItems'),
      items,
      deletePaymentMethod,
      createPaymentMethod,
      dialog,
      refetch,
      totalItems,
      detailPaymentMethod,
      query
    }
  }
})
</script>
<style lang="scss">
.app-filter {
  .filter-component,
  span {
    flex: 0 1 200px;

    .v-autocomplete .v-select__selections {
      flex-wrap: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .v-chip__content {
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }
    }
  }
}
</style>
