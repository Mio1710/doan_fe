import { computed, useContext } from '@nuxtjs/composition-api'
import { useQuery } from 'vue-query'
import Parser from '~/utils/parser'

export default function useGetCurrentStudents(params = {}, options = {}) {
  const { $api } = useContext()

  console.log('params', params.value)
  const query = useQuery(
    ['current-students', params],
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

      return $api.teacher.getCurrentStudents(query)
    },
    options
  )

  const items = computed(() => query.data?.value || [])
  const totalItems = computed(() => items.value.length || 0)

  return {
    ...query,
    items,
    totalItems
  }
}
