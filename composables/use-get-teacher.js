import { computed, useContext } from '@nuxtjs/composition-api'
import { useQuery } from 'vue-query'
import Parser from '@/utils/parser'

export default function useGetTeachers(params = {}, options = {}) {
  const { $api } = useContext()

  const query = useQuery(
    ['teachers', params],
    () => {
      const query = new Parser({
        includes: [],
        appends: [],
        fields: {},
        filters: { type: 'teacher' }, // Only fetch users with type='teacher'
        sorts: [],
        page: 1,
        limit: 10,
        payload: null,
        ...params.value
      }).query()

      return $api.teacher.getUsers(query)
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
