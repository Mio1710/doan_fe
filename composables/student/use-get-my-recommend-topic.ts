import { computed } from 'vue'
import { UnwrapRef } from 'vue-demi'
import { useQuery } from 'vue-query'

export default function useGetMyRecommendTopics(params?: UnwrapRef<any>, options?: any) {
  const { $api } = useNuxtApp()

  const query = useQuery(
    ['my-recommend-topic', params],
    () => {
      return $api.topic.getMyRecommendTopic()
    },
    {
      refetchOnWindowFocus: false,
      ...options,
    },
  )

  const items = computed(() => query.data.value?.data || null)

  return {
    ...query,
    items,
  }
}
