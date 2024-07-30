<template>
  <div>
    <div class="bg-white d-flex items-center py-2">
      <nuxt-link to="/teacher">
        <v-img contain src="/images/logo.png" width="200" />
      </nuxt-link>
      <v-spacer />
      <div class="mr-4">
        <v-tabs>
          <v-tab @click="showAll">Sinh viên</v-tab>
          <v-tab @click="showWait">Chờ duyệt</v-tab>
        </v-tabs>
      </div>
    </div>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card class="d-flex align-center justify-center" min-height="200px">
          <div v-if="totalItems > 0" class="w-5/6 mx-auto my-4 h-full">
            <div class="app-filter d-flex gap-3">
              <v-text-field
                v-model="query.filters.q"
                class="filter-component"
                dense
                hide-details
                label="Tìm kiếm"
                outlined
              />
              <v-select
                v-model="query.filters.status"
                class="filter-component"
                dense
                hide-details
                :items="status"
                label="Trạng thái"
                outlined
              />
            </div>
            <v-data-table :headers="headers" :items="items">
              <template #item.index="{ index }">
                <span>{{ index + 1 }}</span>
              </template>
              <template #item.company.status="{ item }">
                <v-chip :color="item.company | companyStatusColor" outlined small>
                  {{ item.company | companyStatus }}
                </v-chip>
              </template>
              <template #item.action="{ item }">
                <v-btn :disabled="!item.company" small text @click="viewDetail(item)">
                  <v-icon color="info" left small>mdi-eye-outline</v-icon>
                  <span>Xem chi tiết</span>
                </v-btn>
              </template>
            </v-data-table>
          </div>
          <div v-else>
            <p class="text-2xl text-center font-weight-bold">Bạn không giám sát sinh viên nào</p>
          </div>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card>
          <div class="w-5/6 ma-auto">
            <h1 class="text-center text-2xl font-weight-bold">Thông tin sinh viên</h1>
          </div>
          <v-container>
            <student-detail v-if="stateStudent" class="px-[50px]" :my-company="stateStudent" @acceptCompany="showAll" />
          </v-container>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card class="d-flex align-center justify-center" min-height="200px">
          <div v-if="totalItems > 0" class="w-5/6 mx-auto my-4 h-full">
            <div class="app-filter d-flex gap-3">
              <v-text-field
                v-model="query.filters.q"
                class="filter-component"
                dense
                hide-details
                label="Tìm kiếm"
                outlined
              />
              <v-select
                v-model="query.filters.status"
                class="filter-component"
                dense
                hide-details
                :items="status"
                label="Trạng thái"
                outlined
              />
            </div>
            <v-data-table :headers="headers" :items="items">
              <template #item.index="{ index }">
                <span>{{ index + 1 }}</span>
              </template>
              <template #item.company.status="{ item }">
                <v-chip :color="item.company | companyStatusColor" outlined small>
                  {{ item.company | companyStatus }}
                </v-chip>
              </template>
              <template #item.action="{ item }">
                <v-btn small text @click="viewDetail(item)">
                  <v-icon color="info" left small>mdi-eye-outline</v-icon>
                  <span>Xem chi tiết</span>
                </v-btn>
              </template>
            </v-data-table>
          </div>
          <div v-else>
            <p class="text-2xl text-center font-weight-bold">Không có yêu cầu cần phê duyệt</p>
          </div>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRef } from '@nuxtjs/composition-api'
import { useGetCurrentStudents } from '~/composables'
import StudentDetail from '~/components/common/share/StudentDetail.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { StudentDetail },
  layout: 'web',
  middleware: ['teacher'],

  setup() {
    const tab = ref(0)
    const query = ref({
      filters: {
        q: '',
        type: 'teacher',
        include: ['faculty', 'report'],
        status: []
      },
      sorts: '-created_at',
      page: 1,
      limit: 100
    })

    const stateStudent = ref({})

    const { items, totalItems } = useGetCurrentStudents(query)

    const state = reactive({
      headers: [
        { text: 'STT', value: 'index', align: 'left', sortable: false },
        { text: 'Tên sinh viên', value: 'fullName' },
        { text: 'MSSV', value: 'maso' },
        { text: 'Lớp', value: 'classroom.ten' },
        { text: 'Trạng thái', value: 'company.status' },
        { text: 'Công ty', value: 'company.tenCongTy' },
        { text: '', value: 'action', align: 'right', sortable: false }
      ],
      selectedItems: []
    })
    const viewDetail = (item) => {
      tab.value = 1
      stateStudent.value = item
    }

    const status = [
      { text: 'Chưa đăng ký', value: null },
      { text: 'Chờ duyệt', value: '0' },
      { text: 'Đã duyệt', value: '1' }
    ]

    const showAll = () => {
      tab.value = 0
      stateStudent.value = null
      query.value.filters.status = []
    }

    const showWait = () => {
      tab.value = 2
      query.value.filters.status = [0]
    }

    return {
      tab,
      items,
      headers: toRef(state, 'headers'),
      selectedItems: toRef(state, 'selectedItems'),
      viewDetail,
      stateStudent,
      totalItems,
      query,
      status,
      showAll,
      showWait
    }
  }
})
</script>
