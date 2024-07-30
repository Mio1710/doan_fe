<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    hide-submit
    :loading="loading"
    title="Chi tiết sản phẩm"
    width="700px"
    @close="dialog = false"
  >
    <v-row dense>
      <v-col cols="12">
        <v-card class="pa-2">
          <v-img contain height="200" :src="form.image_url || '/images/product/default.png'" />
        </v-card>
      </v-col>
      <v-col cols="12">
        <span class="font-bold">Tên sản phẩm:</span>
        <span>{{ form.name }}</span>
      </v-col>
      <v-col cols="6">
        <span class="font-bold">Loại sản phẩm:</span>
        <span>{{ form.category.name }}</span>
      </v-col>
      <v-col cols="6">
        <span class="font-bold">Thương hiệu:</span>
        <span>{{ form.brand.name }}</span>
      </v-col>
      <v-col cols="6">
        <span class="font-bold">Giá:</span>
        <span>{{ form.price | currency }}</span>
      </v-col>
      <v-col cols="6">
        <span class="font-bold">Bị báo cáo:</span>
        <span>{{ form.num_reports }}</span>
      </v-col>
      <v-col cols="12">
        <span class="font-bold">Mô tả:</span>
        <span>{{ form.description }}</span>
      </v-col>
    </v-row>
  </form-dialog>
</template>

<script>
import { defineComponent, reactive, ref, toRef } from '@nuxtjs/composition-api'
import FormDialog from '@/components/common/organisms/FormDialog'

export default defineComponent({
  name: 'DetailProdDialog',
  components: { FormDialog },

  setup() {
    const initialState = () => ({
      form: {}
    })
    const state = reactive(initialState())
    const loading = ref(false)
    const dialog = ref(false)

    const open = (item) => {
      dialog.value = true
      state.form = Object.assign({}, item)
    }

    return {
      form: toRef(state, 'form'),
      loading,
      dialog,
      open
    }
  }
})
</script>

<style scoped></style>
