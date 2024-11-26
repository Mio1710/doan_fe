<!-- <script setup lang="ts">
import { ref, computed } from 'vue'
import { useQueryClient } from 'vue-query'
import { format } from 'date-fns'
import AppTextField from '~/components/common/atoms/AppTextField.vue'
import ImportStudentIntern from '~/components/admin/student-intern/molecules/ImportStudentIntern.vue'
import CreateStudentIntern from '~/components/admin/student-intern/molecules/CreateStudentIntern.vue'
import DeleteTeacherConfirmDialog from '~/components/admin/teacher/molecules/DeleteTeacherConfirmDialog.vue'
import UpdateStudentIntern from '~/components/admin/student-intern/molecules/UpdateStudentIntern.vue'
import DeleteStudentInternConfirmDialog from '~/components/admin/student-intern/molecules/DeleteStudentInternConfirmDialog.vue'

const filters = ref({
  q: '',
})

definePageMeta({
  layout: 'auth',
  middleware: ['is-admin'],
})
const isCreate = ref(false)
const semester = ref('')
const headers = [
  {
    title: 'STT',
    align: 'center',
    sortable: false,
    key: 'index',
    width: 50,
  },
  { title: 'Tên sinh viên', key: 'ten' },
  { title: 'Lớp', key: 'lop', width: '15%', minWidth: 150 },
  { title: 'Giảng viên hướng dẫn', key: 'gv', width: '20%', minWidth: 200 },
  { title: '', key: 'action', width: 100 },
]
const serverOptions = ref({
  page: 1,
  rowsPerPage: 25,
  sortBy: '-created_at',
  sortType: 'asc',
})
const queryBuilder = computed(() => ({
  ...serverOptions.value,
}))

const { $api, $toast } = useNuxtApp()

const queryClient = useQueryClient()
const handleActive = (item) => {
  try {
    $api.semester.activeSemester(item.id).then(() => {
      queryClient.invalidateQueries('semester')
      $toast.success('Đã cập nhật trạng thái thành công')
    })
  } catch (error) {
    console.log(error)
  }
}

const createSemester = () => {
  try {
    $api.semester.createSemester({ ten: semester.value }).then(() => {
      queryClient.invalidateQueries('semester')
      $toast.success('Tạo mới thành công')
      isCreate.value = false
      semester.value = ''
    })
  } catch (error) {
    console.log(error)
  }
}

const { items, totalItems, isLoading, refetch } = useGetStudentIntern(queryBuilder)
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-full">
    <div class="text-lg font-bold text-uppercase">Quản lý sinh viên thực tập</div>
    <v-card class="pa-3 h-full" color="white" variant="flat">
      <div class="d-flex items-center">
        <v-dialog min-width="400" width="40%">
          <template #activator="{ props: activatorProps }">
            <v-btn color="success" size="small" v-bind="activatorProps">
              <v-icon>mdi-plus</v-icon>
              <span>Import</span>
            </v-btn>
          </template>
          <template #default="{ isActive }">
            <import-student-intern @cancel="isActive.value = false" />
          </template>
        </v-dialog>
        <v-spacer />
        <v-btn icon size="x-small" variant="text" @click="refetch()">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </div>
      <div class="mt-2">
        <v-data-table :headers="headers" hide-default-footer :items="items" :loading="isLoading">
          <template #item.index="{ index }">
            <span>{{ index + 1 }}</span>
          </template>       
          <template #item.ten="{ item }">
            <span>{{ item.hodem + ' ' + item.ten }}</span>
          </template>
        </v-data-table>
      </div>
    </v-card>
  </div>
</template>

<style scoped></style> -->

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useQueryClient } from 'vue-query'
import { format } from 'date-fns'
import AppTextField from '~/components/common/atoms/AppTextField.vue'
import ImportStudentIntern from '~/components/admin/student-intern/molecules/ImportStudentIntern.vue'
import CreateStudentIntern from '~/components/admin/student-intern/molecules/CreateStudentIntern.vue'
import DeleteTeacherConfirmDialog from '~/components/admin/teacher/molecules/DeleteTeacherConfirmDialog.vue'
import UpdateStudentIntern from '~/components/admin/student-intern/molecules/UpdateStudentIntern.vue'
import DeleteStudentInternConfirmDialog from '~/components/admin/student-intern/molecules/DeleteStudentInternConfirmDialog.vue'

const filters = ref({
  q: '',
})

definePageMeta({
  layout: 'auth',
  middleware: ['is-admin'],
})
const isCreate = ref(false)
const semester = ref('')
const headers = [
  {
    title: 'STT',
    align: 'center',
    sortable: false,
    key: 'index',
    width: 50,
  },
  { title: 'Tên sinh viên', key: 'ten' },
  { title: 'Mã số', key: 'maso' },
  { title: 'Email', key: 'email' },
  { title: 'Lớp', key: 'lop', width: '15%', minWidth: 150 },
  { title: 'Số điện thoại', key: 'phone', width: '5%', minWidth: 50 },
  { title: 'Giảng viên hướng dẫn', key: 'gv', width: '20%', minWidth: 200 },
  { title: '', key: 'action', width: 100 },
]
const serverOptions = ref({
  page: 1,
  rowsPerPage: 25,
  sortBy: '-created_at',
  sortType: 'asc',
})
const queryBuilder = computed(() => ({
  ...serverOptions.value,
  filters: filters.value,
}))

const { $api, $toast } = useNuxtApp()

const queryClient = useQueryClient()
const handleActive = (item) => {
  try {
    $api.semester.activeSemester(item.id).then(() => {
      queryClient.invalidateQueries('semester')
      $toast.success('Đã cập nhật trạng thái thành công')
    })
  } catch (error) {
    console.log(error)
  }
}

const createSemester = () => {
  try {
    $api.semester.createSemester({ ten: semester.value }).then(() => {
      queryClient.invalidateQueries('semester')
      $toast.success('Tạo mới thành công')
      isCreate.value = false
      semester.value = ''
    })
  } catch (error) {
    console.log(error)
  }
}

const { items, totalItems, isLoading, refetch } = useGetStudentIntern(queryBuilder)
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-full">
    <div class="text-lg font-bold text-uppercase">Quản lý sinh viên Thực tập</div>
    <v-card class="px-3 py-2 h-full" color="white" variant="flat">
      <div class="d-flex items-center">
        <v-dialog min-width="600" width="60%">
          <template #activator="{ props: activatorProps }">
            <v-btn color="success" size="small" v-bind="activatorProps">
              <v-icon>mdi-plus</v-icon>
              <span>Import</span>
            </v-btn>
          </template>
          <template #default="{ isActive }">
            <import-student-intern @cancel="isActive.value = false" />
          </template>
        </v-dialog>
        <app-text-field
          v-model="filters.q"
          class="h-[24px] w-[250px] ml-2"
          clearable
          density="compact"
          placeholder="Tên/Mã số sinh viên"
          prepend-inner-icon="mdi-magnify"
          variant="plain"
        />
        <v-spacer />
        <v-dialog min-width="400" width="40%">
          <template #activator="{ props: activatorProps }">
            <v-btn color="success" size="small" v-bind="activatorProps">
              <v-icon>mdi-plus</v-icon>
              <span>Thêm sinh viên</span>
            </v-btn>
          </template>
          <template #default="{ isActive }">
            <create-student-intern @cancel="isActive.value = false" @success="refetch" />
          </template>
        </v-dialog>
        <v-btn icon size="x-small" variant="text" @click="refetch()">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </div>
      <div class="mt-2 h-[calc(100%_-_45px)]">
        <v-data-table
          class="h-full"
          fixed-header
          :headers="headers"
          hide-default-footer
          :items="items"
          :items-per-page="1000"
          :loading="isLoading"
        >
          <template #item.index="{ index }">
            <span>{{ index + 1 }}</span>
          </template>
          <template #item.ten="{ item }">
            <span>{{ item.hodem + ' ' + item.ten }}</span>
          </template>
          <template #item.action="{ item }">
            <v-dialog min-width="400" width="40%">
              <template #activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" color="success" icon size="small" variant="text">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <template #default="{ isActive }">
                <update-student-intern :student-intern="item" @cancel="isActive.value = false" />
              </template>
            </v-dialog>
            <delete-student-intern-confirm-dialog :student-intern="item" @success="refetch" />
          </template>
        </v-data-table>
      </div>
    </v-card>
  </div>
</template>

<style scoped></style>
