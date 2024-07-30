<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="d-flex align-center">
      <h1 class="mb-6">Lớp học phần</h1>
      <v-spacer />
    </div>
    <div class="px-3 d-flex">
      <div class="app-filter d-flex gap-3">
        <v-text-field v-model="query.filters.q" class="filter-component" dense hide-details label="Tìm kiếm" outlined />
      </div>
      <v-spacer />
      <v-btn color="primary" small @click="createClassroom">
        <v-icon left small>mdi-plus</v-icon>
        Thêm Lớp học phần
      </v-btn>
    </div>
    <div class="pa-2">
      <app-data-table v-model="selectedItems" class="elevation-1" :headers="headers" :items="items" :items-per-page="5">
        <template #item.index="{ index }">
          <span>{{ index + 1 }}</span>
        </template>
        <template #item.gv="{ item }">
          <span>{{ item.giangvien.hodem + ' ' + item.giangvien.ten }}</span>
        </template>
        <template #item.startDate="{ item }">
          <span>{{ item.startDate | formatDate }}</span>
        </template>
        <template #item.endDate="{ item }">
          <span>{{ item.endDate | formatDate }}</span>
        </template>
        <template #item.action="{ item }">
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <v-btn v-bind="attrs" icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item class="info--text" dense @click="detailClassroom(item)">
                <v-list-item-title>
                  <v-icon color="info" left small>mdi-eye-outline</v-icon>
                  <span>Sửa</span>
                </v-list-item-title>
              </v-list-item>
              <v-list-item class="error--text" dense @click="deleteClassroom(item)">
                <v-list-item-title>
                  <v-icon color="error" left small>mdi-delete-outline</v-icon>
                  <span>Xóa</span>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </app-data-table>
      <create-class-dialog ref="createClassDialog" />
      <edit-class-dialog ref="editClassDialog" />
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRef, useContext } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import AppDataTable from '@/components/common/molecules/AppDataTable'
import CreateClassDialog from '@/components/admin/classes/organisms/CreateClassDialog.vue'
import EditClassDialog from '@/components/admin/classes/organisms/EditClassDialog.vue'
import { useGetClassrooms } from '~/composables'

export default defineComponent({
  components: {
    EditClassDialog,
    CreateClassDialog,
    AppDataTable
  },
  setup(_, { refs }) {
    const { $api } = useContext()
    const queryClient = useQueryClient()
    const query = ref({
      filters: {
        q: '',
        include: ['giangvien', 'khoa', 'students']
      },
      sorts: '-created_at',
      page: 1,
      limit: 100
    })

    const { items } = useGetClassrooms(query, {
      staleTime: 1000 * 60 * 15
    })

    const state = reactive({
      headers: [
        { text: 'STT', value: 'index', align: 'left', sortable: false },
        { text: 'Mã', value: 'maLop' },
        { text: 'Tên', value: 'ten' },
        { text: 'Giảng viên', value: 'gv' },
        { text: 'Khoa', value: 'khoa.ten' },
        { text: 'Ngày bắt đầu', value: 'startDate' },
        { text: 'Ngày kết thúc', value: 'endDate' },
        { text: '', value: 'action', align: 'right', sortable: false }
      ],
      selectedItems: []
    })
    const dialog = ref(false)

    const createClassroom = () => {
      refs.createClassDialog.open()
    }

    const detailClassroom = (item) => {
      refs.editClassDialog.open(item)
    }

    const deleteClassroom = (data) => {
      $api.classroom.deleteClassroom(data.id).then(() => {
        queryClient.invalidateQueries('classrooms')
      })
    }

    return {
      headers: toRef(state, 'headers'),
      selectedItems: toRef(state, 'selectedItems'),
      items,
      deleteClassroom,
      createClassroom,
      dialog,
      detailClassroom,
      query
    }
  }
})
</script>
<style lang="scss">
.app-filter {
  .filter-component,
  span {
    flex: 0 1 200px;

    .v-autocomplete .v-select__selections {
      flex-wrap: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .v-chip__content {
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }
    }
  }
}
</style>
