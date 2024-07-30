<template>
  <v-row dense>
    <v-col cols="12">
      <v-card class="pa-2">
        <v-img contain height="200" :src="form.image_url || '/images/product/default.png'" />
        <v-card-text class="px-0 pb-0">
          <app-file-input
            v-model="form.image"
            accept="image/jpg, image/jpeg, image/png"
            label="Image"
            :rules="form.image_url ? '' : 'required'"
            @change="onFileChange"
          />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <app-text-field
        v-model="form.name"
        autocomplete="new-name"
        label="Tên sản phẩm"
        rules="required|max:255"
        vid="name"
      />
    </v-col>
    <v-col cols="6">
      <brand-autocomplete v-model="form.brand_id" label="Thương hiệu" rules="required" vid="brand_id" />
    </v-col>
    <v-col cols="6">
      <category-autocomplete v-model="form.category_id" label="Phân loại" rules="required" vid="category_id" />
    </v-col>
    <v-col cols="6">
      <app-text-field
        v-model="form.quantity"
        autocomplete="new-quantity"
        label="Số lượng tồn kho"
        rules="required"
        type="number"
        vid="quantity"
      />
    </v-col>
    <v-col cols="6">
      <app-currency
        v-model="form.price"
        autocomplete="new-price"
        label="Giá"
        rules="required"
        type="number"
        vid="price"
      />
    </v-col>
    <v-col cols="12">
      <app-textarea
        v-model="form.description"
        autocomplete="new-description"
        label="Mô tả"
        :rows="5"
        rules="required|min:100"
        vid="description"
      />
    </v-col>
  </v-row>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import AppTextField from '@/components/common/atoms/AppTextField'
import BrandAutocomplete from '@/components/sale/products/atoms/BrandAutocomplete'
import CategoryAutocomplete from '@/components/sale/products/atoms/CategoryAutocomplete'
import AppCurrency from '@/components/common/atoms/AppCurrency'
import AppFileInput from '@/components/common/atoms/AppFileInput'
import AppTextarea from '~/components/common/atoms/AppTextarea.vue'

export default defineComponent({
  name: 'ProductForm',
  components: { AppTextarea, AppFileInput, AppCurrency, CategoryAutocomplete, BrandAutocomplete, AppTextField },
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
      if (file) {
        form.value.image_url = URL.createObjectURL(file)
        URL.revokeObjectURL(file)
      } else {
        form.value.image_url = null
      }
    }

    return {
      form,
      onFileChange
    }
  }
})
</script>
