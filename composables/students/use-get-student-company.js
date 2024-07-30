import { computed, useContext } from '@nuxtjs/composition-api'
import { useQuery } from 'vue-query'
import Parser from '~/utils/parser'

export default function useGetStudentCompany(params = {}, options = {}) {
  const { $api } = useContext()

  const query = useQuery(
    ['student-company', params],
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
      return $api.student.getStudentCompany(query)
    },
    options
  )

  const item = computed(() => query.data.value || {})

  return {
    ...query,
    item
  }
}
