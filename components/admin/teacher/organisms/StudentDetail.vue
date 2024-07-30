<template>
  <v-row>
    <v-col>Họ và tên</v-col>
    <v-col>{{ student.ten }}</v-col>
    <div>{{ listFiles }}</div>
  </v-row>
</template>
<script>
import { computed, defineComponent, ref, watch } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import { useGetStudentFiles } from '~/composables'

export default defineComponent({
  name: 'StudentDetail',
  props: {
    student: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props) {
    const idSv = computed(() => props.student.id)
    const listFiles = ref([])
    const enable = ref(false)
    const query = ref({
      filters: {
        svId: idSv.value
      },
      sorts: '-created_at',
      page: 1,
      limit: 100
    })
    const items = useGetStudentFiles(query, { enable })
    const queryClient = useQueryClient()
    console.log('q', queryClient)
    watch(
      () => props.student,
      (item) => {
        console.log('có id', item.id, query)
        if (item.id) {
          // call api get detail student
          query.value.filters.svId = item.id
          enable.value = true
          listFiles.value = items
          // queryClient.invalidateQueries('student-files')
        } else {
          listFiles.value = []
        }
      }
    )
    return {
      listFiles,
      items,
      idSv
    }
  }
})
</script>
