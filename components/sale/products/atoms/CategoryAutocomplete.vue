<template>
  <app-autocomplete
    v-model="innerValue"
    v-bind="$attrs"
    cache-items
    :items="items"
    :loading="isLoading"
    :multiple="multiple"
    v-on="$listeners"
    @search="inputSearch"
  />
</template>

<script>
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import AppAutocomplete from '@/components/common/atoms/AppAutocomplete'
import { useGetCategories } from '@/composables'

export default defineComponent({
  name: 'CategoryAutocomplete',
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
    disabledItems: {
      type: Array,
      default: () => []
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
    const { isLoading, data } = useGetCategories(params, {
      staleTime: 1000 * 60 * 15
    })
    const items = computed(() =>
      (data.value?.data || []).map((item) => ({
        ...item,
        disabled: props.disabledItems.includes(item.id)
      }))
    )

    const inputSearch = (search) => {
      params.value.filters.q = search
    }

    return {
      innerValue,
      params,
      isLoading,
      items,
      inputSearch
    }
  }
})
</script>
