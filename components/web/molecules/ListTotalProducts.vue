<template>
  <v-row class="mx-3 lg:mx-0" dense>
    <v-col cols="12">
      <v-card class="mx-2 px-1">
        <v-row dense>
          <v-col cols="3">
            <v-text-field
              v-model="query.filters.q"
              class="filter-component"
              dense
              hide-details
              label="Tìm kiếm"
              outlined
            />
          </v-col>
          <v-col cols="3">
            <brand-autocomplete
              v-model="query.filters.brand_ids"
              class="filter-component"
              dense
              hide-details
              label="Thương hiệu"
              :multiple="true"
              outlined
            />
          </v-col>
          <v-col cols="3">
            <category-autocomplete
              v-model="query.filters.category_ids"
              class="filter-component"
              dense
              hide-details
              label="Phân loại"
              :multiple="true"
              outlined
            />
          </v-col>
          <v-col cols="2">
            <app-select
              v-model="query.sorts"
              class="filter-component"
              dense
              hide-details
              :items="typePrices"
              label="Giá"
              outlined
            />
          </v-col>
          <v-btn fab small @click="resetFilter">
            <v-icon>mdi-filter-off</v-icon>
          </v-btn>
        </v-row>
      </v-card>
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
      <v-pagination v-if="totalPages > 1" v-model="query.page" circle :length="totalPages" :total-visible="10" />
      <v-row v-if="totalItems === 0" class="text-center">
        <v-col cols="12">
          <h3 class="text--primary">Không có sản phẩm nào</h3>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useGetProds } from '@/composables'
import BrandAutocomplete from '~/components/sale/products/atoms/BrandAutocomplete.vue'
import AppSelect from '~/components/common/atoms/AppSelect.vue'
import CategoryAutocomplete from '~/components/sale/products/atoms/CategoryAutocomplete.vue'

export default defineComponent({
  name: 'TotalProducts',
  components: { CategoryAutocomplete, AppSelect, BrandAutocomplete },
  props: {
    categoryId: {
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
    }
  },

  setup(props) {
    const onboarding = ref(1)
    const query = ref({
      filters: {
        q: '',
        category_ids: [],
        brand_ids: [],
        status: 1,
        is_lock: false,
        allow_out_stock: true
      },
      sorts: '-created_at',
      page: 1,
      limit: props.limit
    })

    const { items, totalItems, isLoading, totalPages } = useGetProds(query)
    const key = ref(props.productKey ?? props.slug ?? 'key')

    const typePrices = [
      { value: 'Cao tới thấp', key: '-price' },
      { value: 'Thấp tới cao', key: 'price' }
    ]

    const resetFilter = () => {
      query.value.filters = {
        q: '',
        category_ids: [],
        brand_ids: [],
        status: 1
      }
      query.value.sorts = '-created_at'
    }

    return {
      onboarding,
      items,
      totalItems,
      isLoading,
      key,
      query,
      totalPages,
      typePrices,
      resetFilter
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
