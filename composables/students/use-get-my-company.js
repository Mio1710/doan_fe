import { computed, useContext } from '@nuxtjs/composition-api'
import { useQuery } from 'vue-query'

export default function useGetMyCompany(params = {}, options = {}) {
  const { $api } = useContext()

  const query = useQuery(
    ['my-company', params],
    () => {
      return $api.student.getMyCompany()
    },
    options
  )

  const myCompany = computed(() => query.data.value || {})

  return {
    ...query,
    myCompany
  }
}
