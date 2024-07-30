<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="d-flex align-center">
      <h1 class="mb-6">Giảng viên</h1>
      <v-spacer />
    </div>
    <div class="px-3 d-flex">
      <div class="app-filter d-flex gap-3">
        <v-text-field v-model="query.filters.q" class="filter-component" dense hide-details label="Tìm kiếm" outlined />
      </div>
      <v-spacer />
      <v-btn color="primary" small @click="createTeacher">
        <v-icon left small>mdi-plus</v-icon>
        Thêm Giảng viên
      </v-btn>
    </div>
    <div class="pa-2">
      <app-data-table v-model="selectedItems" class="elevation-1" :headers="headers" :items="items" :items-per-page="5">
        <template #item.index="{ index }">
          <span>{{ index + 1 }}</span>
        </template>
        <template #item.hinhanh="{ item }">
          <v-avatar class="cursor-pointer" size="40" v-on="on">
            <v-img :src="item.hinhanh | userImageDefault" />
          </v-avatar>
        </template>
        <template #item.ten="{ item }">
          <span>{{ item.hodem + ' ' + item.ten }}</span>
        </template>
        <template #item.action="{ item }">
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <v-btn v-bind="attrs" icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item class="info--text" dense @click="detailTeacher(item)">
                <v-list-item-title>
                  <v-icon color="info" left small>mdi-eye-outline</v-icon>
                  <span>Sửa</span>
                </v-list-item-title>
              </v-list-item>
              <v-list-item class="error--text" dense @click="deleteTeacher(item)">
                <v-list-item-title>
                  <v-icon color="error" left small>mdi-delete-outline</v-icon>
                  <span>Xóa</span>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </app-data-table>
      <create-teacher-dialog ref="createTeacherDialog" />
      <edit-teacher-dialog ref="editTeacherDialog" />
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRef, useContext } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import AppDataTable from '@/components/common/molecules/AppDataTable'
import { useGetTeachers } from '~/composables'
import CreateTeacherDialog from '~/components/admin/teacher/organisms/CreateTeacherDialog.vue'
import EditTeacherDialog from '~/components/admin/teacher/organisms/EditTeacherDialog.vue'

export default defineComponent({
  components: {
    EditTeacherDialog,
    CreateTeacherDialog,
    AppDataTable
  },
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

    const { items } = useGetTeachers(query)

    const state = reactive({
      headers: [
        { text: 'STT', value: 'index', align: 'left', sortable: false },
        { text: 'Hình ảnh', value: 'hinhanh' },
        { text: 'Mã', value: 'maso' },
        { text: 'Tên', value: 'ten' },
        { text: 'Số điện thoại', value: 'phone' },
        { text: 'Email', value: 'email' },
        { text: 'Khoa', value: 'faculty.ten' },
        { text: '', value: 'action', align: 'right', sortable: false }
      ],
      selectedItems: []
    })
    const dialog = ref(false)

    const createTeacher = () => {
      refs.createTeacherDialog.open()
    }

    const detailTeacher = (item) => {
      refs.editTeacherDialog.open(item)
    }

    const deleteTeacher = (data) => {
      $api.user.deleteUser(data.id).then(() => {
        queryClient.invalidateQueries('teachers')
      })
    }

    return {
      headers: toRef(state, 'headers'),
      selectedItems: toRef(state, 'selectedItems'),
      items,
      deleteTeacher,
      createTeacher,
      dialog,
      detailTeacher,
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
