<template>
  <app-autocomplete
    v-model="innerValue"
    v-bind="$attrs"
    cache-items
    :clearable="clearable"
    :items="items"
    :loading="isLoading"
    :multiple="multiple"
    :search.sync="params.filters.q"
    v-on="$listeners"
  />
</template>

<script>
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import AppAutocomplete from '~/components/common/atoms/AppAutocomplete.vue'
import { useGetDeliveryMethods } from '~/composables'

export default defineComponent({
  name: 'DeliveryAutocomplete',
  components: {
    AppAutocomplete
  },
  props: {
    value: {
      type: [Number, String, Array, Object],
      default: null
    },
    text: {
      type: String,
      default: null
    },
    defaultParams: {
      type: Object,
      default: () => ({})
    },
    multiple: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const innerValue = computed({
      get: () => props.value,
      set: (val) => emit('input', val)
    })

    const params = ref({
      filters: {
        ...props.defaultParams,
        q: props.text
      }
    })
    const { isLoading, data } = useGetDeliveryMethods(params, {
      staleTime: 1000 * 60 * 15
    })
    const items = computed(() =>
      (data.value?.data || []).map((item) => ({
        ...item
      }))
    )

    return {
      innerValue,
      params,
      isLoading,
      items
    }
  }
})
</script>
