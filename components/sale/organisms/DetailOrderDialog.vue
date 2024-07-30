<template>
  <form-order-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    title="CHI TIẾT ĐƠN HÀNG"
    width="800px"
    @close="dialog = false"
  >
    <!-- <order-form v-model="form" :allow-edit="allowEdit" is-update /> -->
    <div class="order-details">
      <v-card v-if="order" class="mt-3">
        <v-card-text>
          <div class="d-flex items-center">
            <span class="mr-2">
              Mã đơn hàng:
              <span class="font-bold">{{ order.order_code }}</span>
            </span>
            <v-spacer />
            Trạng thái đơn hàng
            <v-chip v-if="order.order_status === 4" class="ma-2" color="success" label>
              {{ order.order_status | saleOrderStatus }}
            </v-chip>
            <v-chip v-else-if="order.order_status === 5 || order.order_status === 6" class="ma-2" color="error" label>
              {{ order.order_status | saleOrderStatus }}
            </v-chip>
            <div v-else>
              <v-chip class="ma-2" color="primary" label>
                {{ order.order_status | saleOrderStatus }}
              </v-chip>
            </div>
          </div>
          <div class="d-flex w-full mb-2">
            <div class="w-1/2">
              <v-icon>mdi-calendar</v-icon>
              <span>Ngày đặt hàng:</span>
              <span class="ml-2">{{ order.created_at | formatDate }}</span>
            </div>
            <div class="w-1/2">
              <v-icon>mdi-calendar</v-icon>
              <span>Ngày giao hàng:</span>
              <span class="ml-2">{{ order.delivery_date | formatDate }}</span>
            </div>
          </div>
          <div class="d-flex">
            <div class="text-error min-w-[150px]">
              <v-icon>mdi-map-marker</v-icon>
              <span>Địa chỉ nhận hàng:</span>
            </div>
            <div class="d-flex mb-2 w-full items-center">
              <div class="ml-2">
                <span>
                  <b>{{ order.customer.name }} - {{ order.customer.phone }}</b>
                  <span class="ml-2 text-[16px]">{{ order.customer.address }}</span>
                </span>
              </div>
              <v-spacer />
            </div>
          </div>
          <div>
            <v-icon>mdi-truck-delivery</v-icon>
            <span>Đơn vị vận chuyển:</span>
            <span class="ml-2">{{ order.deliveryMethod.name }}</span>
          </div>
        </v-card-text>
      </v-card>
      <v-card class="mt-2">
        <v-card-text class="tw-py-0">
          <v-row>
            <v-col cols="5">Sản phẩm</v-col>
            <v-col cols="2">Đơn giá</v-col>
            <v-col cols="2">Số lượng</v-col>
            <v-col cols="2">Số tiền</v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card v-if="order" class="mt-2">
        <v-card-text>
          <div class="d-flex items-center">
            <!-- <v-avatar class="mx-2" size="40">
              <v-img :src="order.supplier.avatar_url | userImageDefault" />
            </v-avatar> -->
            <span>Nhà bán hàng: {{ order.supplier.name }}</span>
            <v-spacer />
          </div>
          <v-row v-for="(product, index) in order.order_items" :key="index" class="items-center">
            <v-col cols="5">
              <div class="d-flex items-center">
                <v-img contain max-height="60" max-width="100" :src="product.product.image_url" />
                <div class="ml-2">
                  <div class="text--primary">{{ product.product.name }}</div>
                </div>
              </div>
            </v-col>
            <v-col cols="2">{{ product.product.price | currency }}</v-col>
            <v-col cols="2">
              <div>
                {{ product.quantity }}
              </div>
            </v-col>
            <v-col cols="2">{{ (product.product.price * product.quantity) | currency }}</v-col>
          </v-row>
        </v-card-text>
        <v-card-text class="bg-cyan-100">
          <div class="d-flex">
            <v-spacer />
            <div class="max-w-[500px] w-full">
              <div class="d-flex w-full">
                <div class="w-1/2 text-right">
                  <span class="text--primary">Tổng tiền hàng</span>
                </div>
                <div class="w-1/2 text-right">{{ order.total_price | currency }}</div>
              </div>
              <v-divider class="w-full my-2" />
              <div class="d-flex w-full">
                <div class="w-1/2 text-right">
                  <span class="text--primary">Phí vận chuyển</span>
                </div>
                <div class="w-1/2 text-right">{{ order.shipping_fee | currency }}</div>
              </div>
              <v-divider class="w-full my-2" />
              <div class="d-flex w-full">
                <div class="w-1/2 text-right">
                  <span class="text--primary">Thành tiền</span>
                </div>
                <div class="w-1/2 text-right">{{ (order.total_price + order.shipping_fee) | currency }}</div>
              </div>
              <v-divider class="w-full my-2" />
              <div class="d-flex w-full">
                <div class="w-1/2 text-right">
                  <span class="text--primary">Phương thức thanh toán</span>
                </div>
                <div class="w-1/2 text-right">{{ order.paymentMethod.name }}</div>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </form-order-dialog>
</template>

<script>
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import FormOrderDialog from '@/components/common/organisms/FormOrderDialog'

export default defineComponent({
  name: 'DetailOrderDialog',
  components: { FormOrderDialog },

  setup() {
    const { $auth } = useContext()
    const order = ref({})
    const loading = ref(false)
    const dialog = ref(false)
    const address = ref({
      name: $auth.user.name,
      phone: $auth.user.phone,
      address: $auth.user.address
    })
    const open = (i) => {
      dialog.value = true
      order.value = i
    }

    return {
      order,
      loading,
      dialog,
      open,
      address
    }
  }
})
</script>

<style scoped>
p {
  margin: 8px 0;
  font-size: 18px;
  padding: 5px;
}

.info-price {
  text-align: center;
  font-size: 20px;
  margin-top: 60px;
}

.info-price h6 {
  margin-bottom: 10px;
  font-size: 25px;
}

.info-price b {
  font-weight: 400;
  color: green;
}
</style>
