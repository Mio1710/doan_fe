<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="px-3 d-flex">
      <div class="app-filter d-flex gap-3">
        <v-text-field v-model="query.filters.q" class="filter-component" dense hide-details label="Tìm kiếm" outlined />
      </div>
      <v-spacer />
      <v-btn color="primary" small @click="createShippingMethod">
        <v-icon left small>mdi-plus</v-icon>
        Tạo phương thức vận chuyển
      </v-btn>
    </div>
    <div class="pa-2">
      <app-data-table v-model="selectedItems" class="elevation-1" :headers="headers" :items="items" :items-per-page="5">
        <template #item.index="{ index }">
          <span>{{ index + 1 }}</span>
        </template>
        <template #item.price="{ item }">
          <span>{{ item.price | currency }}</span>
        </template>
        <template #item.action="{ item }">
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <v-btn v-bind="attrs" icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item class="info--text" dense @click="detailShippingMethod(item)">
                <v-list-item-title>
                  <v-icon color="info" left small>mdi-eye-outline</v-icon>
                  <span>Xem chi tiết</span>
                </v-list-item-title>
              </v-list-item>
              <v-list-item class="error--text" dense @click="deleteShippingMethod(item)">
                <v-list-item-title>
                  <v-icon color="error" left small>mdi-delete-outline</v-icon>
                  <span>Xóa</span>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </app-data-table>
      <create-shipping-method-dialog ref="createShippingMethodDialog" />
      <edit-shipping-method-dialog ref="editShippingMethodDialog" />
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRef, useContext } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import AppDataTable from '@/components/common/molecules/AppDataTable'
import UseGetDeliveryMethods from '@/composables/use-get-delivery-method'
import CreateShippingMethodDialog from '@/components/admin/shipping-methods/organisms/CreateShippingMethodDialog'
import EditShippingMethodDialog from '@/components/admin/shipping-methods/organisms/EditDeliveryMethodDialog'

export default defineComponent({
  components: {
    EditShippingMethodDialog,
    CreateShippingMethodDialog,
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

    const { items, refetch, totalItems } = UseGetDeliveryMethods(query)

    const state = reactive({
      headers: [
        { text: '#', value: 'index', align: 'left', sortable: false },
        { text: 'Tên', value: 'name' },
        { text: 'Giá', value: 'price' },
        { text: '', value: 'action', align: 'right', sortable: false }
      ],
      selectedItems: []
    })
    const dialog = ref(false)

    const createShippingMethod = () => {
      refs.createShippingMethodDialog.open()
    }

    const detailShippingMethod = (item) => {
      refs.editShippingMethodDialog.open(item, true)
    }

    const deleteShippingMethod = (data) => {
      $api.deliveryMethod.deleteDeliveryMethod(data.id).then(() => {
        queryClient.invalidateQueries('shipping-methods')
      })
    }

    return {
      headers: toRef(state, 'headers'),
      selectedItems: toRef(state, 'selectedItems'),
      items,
      deleteShippingMethod,
      createShippingMethod,
      dialog,
      refetch,
      totalItems,
      detailShippingMethod,
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
