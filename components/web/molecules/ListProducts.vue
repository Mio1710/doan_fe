<template>
  <v-row class="mx-3 lg:mx-0" dense>
    <v-col cols="12">
      <v-row dense>
        <v-col v-for="(item, index) in items" :key="index" class="py-0 px-1" cols="6" md="3">
          <nuxt-link
            class="d-block overflow-hidden w-full pa-2 h-full"
            :to="{ name: 'product-detail', query: { id: item.id } }"
          >
            <v-card class="w-full h-full pa-2 hover:-translate-y-2 transition duration-300 ease-linear">
              <v-img height="240" max-width="270" object-fit="cover" :src="item.image_url" />
              <div class="product-name h-[54px] hover:text-[#6A76AB]">{{ item.name }}</div>
              <v-row>
                <v-col class="text--primary">
                  {{ item.price | currency }}
                </v-col>
              </v-row>
              <div class="d-flex">
                <v-spacer />
                <span class="text-[12px]">Đã bán: {{ item.sold }}</span>
              </div>
            </v-card>
          </nuxt-link>
        </v-col>
        <v-col v-for="i in 8" :key="key + i" class="py-0 px-1" cols="6" md="3">
          <div v-if="isLoading" class="d-block overflow-hidden w-full pa-2 h-full">
            <v-skeleton-loader type="image, article" />
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <div class="text-center">
        <v-btn v-if="link === '/shop'" outlined :to="{ name: 'shop', query: { supplier_id: supplierId } }">
          Xem thêm
        </v-btn>
        <v-btn v-else outlined :to="link">Xem thêm</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useGetProds } from '@/composables'

export default defineComponent({
  name: 'ListProducts',
  props: {
    categoryId: {
      type: Number,
      default: null
    },
    brandId: {
      type: Number,
      default: null
    },
    supplierId: {
      type: Number,
      default: null
    },
    limit: {
      type: Number,
      default: 8
    },
    productKey: {
      type: String,
      default: null
    },
    slug: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    }
  },

  setup(props) {
    const onboarding = ref(1)
    const query = ref({
      filters: {
        category_id: props.categoryId,
        brand_id: props.brandId,
        supplier_id: props.supplierId,
        product_key: props.productKey,
        status: 1,
        is_lock: false,
        allow_out_stock: true
      },
      sorts: '-created_at',
      page: 1,
      limit: props.limit
    })

    const { items, totalItems, isLoading } = useGetProds(query)
    const key = ref(props.productKey ?? props.slug)

    return {
      onboarding,
      items,
      totalItems,
      isLoading,
      key
    }
  }
})
</script>

<style>
.product-name {
  display: box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 18px;
  font-weight: bold;
}
</style>
