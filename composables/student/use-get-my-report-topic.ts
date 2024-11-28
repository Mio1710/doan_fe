import { computed } from 'vue'
import { UnwrapRef } from 'vue-demi'
import { useQuery } from 'vue-query'

export default function useGetMyReportTopics(params?: UnwrapRef<any>, options?: any) {
  const { $api } = useNuxtApp()

  const query = useQuery(
    ['my-report-topic', params],
    () => {
      console.log('params in useQuery', params)
      return $api.teacher.getStudentReportTopics(params)
    },
    {
      refetchOnWindowFocus: false,
      ...options,
    },
  )

  const items = computed(() => query.data.value?.data || {})

  return {
    ...query,
    items,
  }
}
