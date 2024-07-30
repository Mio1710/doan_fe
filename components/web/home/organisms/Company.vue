<template>
  <v-card>
    <v-container>
      <v-data-table :headers="headers" :items="items">
        <template #item.index="{ index }">
          <span>{{ index + 1 }}</span>
        </template>
        <template #item.action="{ item }">
          <v-btn small text @click="viewDetail(item)">
            <v-icon color="info" left small>mdi-eye-outline</v-icon>
            <span>Xem chi tiết</span>
          </v-btn>
        </template>
      </v-data-table>
    </v-container>
  </v-card>
</template>

<script>
import { defineComponent, reactive, ref, toRef, useContext } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import { useGetFaculties } from '~/composables'
export default defineComponent({
  setup(_, { refs }) {
    const { $api } = useContext()
    const queryClient = useQueryClient()
    const query = ref({
      filters: {
        q: '',
        type: 'teacher',
        include: ['faculty']
      },
      sorts: '-created_at',
      page: 1,
      limit: 100
    })

    const { items } = useGetFaculties(query)

    const state = reactive({
      headers: [
        { text: 'STT', value: 'index', align: 'left', sortable: false },
        { text: 'Hình ảnh', value: 'hinhanh' },
        { text: 'Mã số thuế', value: 'maso' },
        { text: 'Tên', value: 'ten' },
        { text: 'Số điện thoại', value: 'phone' },
        { text: 'Email', value: 'email' },
        { text: '', value: 'action', align: 'right', sortable: false }
      ],
      selectedItems: []
    })
    const dialog = ref(false)

    const createTeacher = () => {
      refs.createTeacherDialog.open()
    }

    const viewDetail = (item) => {
      refs.editTeacherDialog.open(item)
    }

    const deleteTeacher = (data) => {
      $api.user.deleteUser(data.id).then(() => {
        queryClient.invalidateQueries('users')
      })
    }

    return {
      headers: toRef(state, 'headers'),
      selectedItems: toRef(state, 'selectedItems'),
      items,
      deleteTeacher,
      createTeacher,
      dialog,
      viewDetail,
      query
    }
  }
})
</script>
