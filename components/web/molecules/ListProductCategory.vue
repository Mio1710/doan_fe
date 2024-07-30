<template>
  <div class="mx-3 lg:mx-0">
    <h2 class="text-center text-[30px] font-bold">{{ item.title }}</h2>
    <list-products :link="item.link" :product-key="item.key" />
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import ListProducts from '~/components/web/molecules/ListProducts.vue'

export default defineComponent({
  name: 'ListProductCategory',
  components: { ListProducts },
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  setup() {
    const length = [1, 2, 3, 4]
    const onboarding = ref(1)

    const next = (item) => {
      onboarding.value = onboarding.value + 1 > length.indexOf(item) ? 1 : onboarding.value + 1
    }

    const prev = (item) => {
      onboarding.value = onboarding.value - 1 <= 0 ? length.indexOf(item) : onboarding.value - 1
    }

    return {
      onboarding,
      length,
      next,
      prev
    }
  }
})
</script>

<style scoped></style>
