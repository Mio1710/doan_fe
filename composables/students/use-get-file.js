import { computed, useContext } from '@nuxtjs/composition-api'
import { useQuery } from 'vue-query'
import Parser from '@/utils/parser'

export default function useGetFiles(params = {}, options = {}) {
  const { $api } = useContext()

  const query = useQuery(
    ['files', params],
    () => {
      const query = new Parser({
        includes: [],
        appends: [],
        fields: {},
        filters: {},
        sorts: [],
        page: 1,
        limit: 10,
        payload: null,
        ...params.value
      }).query()

      return $api.file.getFiles(query)
    },
    options
  )

  const items = computed(() => query.data.value || [])
  const totalItems = computed(() => query.data.value?.pagination?.total || 0)

  return {
    ...query,
    items,
    totalItems
  }
}
