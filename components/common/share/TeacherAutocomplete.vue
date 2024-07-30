<template>
  <app-autocomplete
    v-model="innerValue"
    v-bind="$attrs"
    cache-items
    :clearable="clearable"
    item-text="fullname"
    :items="itemsWithFullName"
    :loading="isLoading"
    :multiple="multiple"
    :search.sync="params.filters.q"
    v-on="$listeners"
  />
</template>

<script>
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import AppAutocomplete from '~/components/common/atoms/AppAutocomplete.vue'
import { useGetTeachers } from '~/composables'

export default defineComponent({
  name: 'TeacherAutocomplete',
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
    const { isLoading, items } = useGetTeachers(params, {
      staleTime: 1000 * 60 * 15
    })

    // Tạo computed property mới để thêm trường fullname
    const itemsWithFullName = computed(() => {
      return items.value.map((item) => ({
        ...item,
        fullname: `${item.hodem} ${item.ten}` // Kết hợp hodem và ten thành fullname
      }))
    })

    return {
      innerValue,
      params,
      isLoading,
      itemsWithFullName // Thay vì items,sử dụng itemsWithFullName
    }
  }
})
</script>
