<template>
  <div>
    <div class="bg-white d-flex items-center py-2">
      <nuxt-link to="/">
        <v-img contain src="/images/logo.png" width="200" />
      </nuxt-link>
      <v-spacer />
      <v-btn v-if="tab === 1" class="mr-3" color="primary" outlined small @click="tab = 0">Quay lại</v-btn>
      <v-btn v-if="tab === 1" class="mr-3" color="primary" dark small>Đăng ký</v-btn>
    </div>
    <div v-if="!myCompany.company && !isFetching" class="d-flex justify-center ma-auto my-6">
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card class="pa-4 d-flex items-center text-center" height="400" width="400">
            <div class="w-full">
              <h1 class="text-h6 text-center font-weight-bold">Thông tin thực tập doanh nghiệp</h1>
              <hr class="my-divider" />
              <p class="mt-6">Bạn chưa đăng ký doanh nghiệp thực tập.</p>
              <p class="mt-6">Vui lòng đăng ký sớm để kịp tiến độ!</p>
              <v-btn color="primary" @click="openForm">Đăng ký ngay</v-btn>
            </div>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card class="pa-4 d-flex items-center text-center" min-height="400px" width="500">
            <div v-if="tab === 1" class="w-full">
              <form-card
                submit-text="Đăng ký"
                title="Đăng ký thực tập doanh nghiệp"
                @cancel="tab = 0"
                @submit="submitForm"
              >
                <company-form v-model="form" :my-company="myCompany" />
              </form-card>
            </div>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
    <div v-else class="d-flex justify-center ma-auto my-6">
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <student-detail
            v-if="myCompany"
            :is-student="true"
            :my-company="myCompany"
            @updateCompany="onUpdateCompany"
          />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import CompanyForm from '@/components/student/company/molecules/CompanyForm.vue'
import FormCard from '~/components/common/molecules/FormCard.vue'
import { useGetMyCompany, useGetFiles } from '~/composables'
// import CreateFileDialog from '~/components/student/file/organisms/CreateFileDialog.vue'
import StudentDetail from '~/components/common/share/StudentDetail.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    FormCard,
    CompanyForm,
    StudentDetail
  },

  layout: 'web',

  setup() {
    const tab = ref(0)
    const { $moment, $api, $dialog } = useContext()
    const loading = ref(false)
    const query = ref({
      filters: {
        q: ''
      },
      sorts: '-created_at',
      page: 1,
      limit: 100
    })
    const { myCompany, isFetching } = useGetMyCompany()
    const { items } = useGetFiles()

    const initialForm = () => ({
      tenCongTy: null,
      viTri: null,
      gv: null,
      lop: null,
      startDate: $moment().format('YYYY-MM-DD'),
      endDate: $moment().format('YYYY-MM-DD')
    })
    const form = ref(initialForm())

    const openForm = () => {
      tab.value = 1
      form.value = initialForm()
    }

    const submitForm = () => {
      loading.value = true
      form.value.gv = myCompany.value.giangvien.id
      form.value.lop = myCompany.value.classroom.id
      $api.company
        .createCompany(form.value)
        .then(() => {
          $dialog.notify.success('Đăng ký thành công, chờ duyệt!')
        })
        .finally(() => {
          loading.value = false
          window.location.reload()
        })
    }
    const createFileDialog = ref(null)
    const createFile = (week) => {
      createFileDialog.value.open(week)
    }

    const isUploaded = (week) => {
      return items.value.some((item) => item.week === week)
    }

    const getItemWeek = (week) => {
      return items.value.find((item) => item.week === week)
    }
    const downloadFile = (week) => {
      const item = getItemWeek(week)
      $api.file.downloadFile(item.id).then((res) => {
        const url = window.URL.createObjectURL(res)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', item.report_file)
        document.body.appendChild(link)
        link.click()
      })
    }

    const onUpdateCompany = () => {
      myCompany.value.company = null
      tab.value = 1
    }
    return {
      openForm,
      loading,
      tab,
      form,
      submitForm,
      myCompany,
      query,
      createFile,
      createFileDialog,
      items,
      isUploaded,
      getItemWeek,
      downloadFile,
      isFetching,
      onUpdateCompany
    }
  }
})
</script>
<style lang="scss">
.sticky-top {
  position: sticky;
  top: 0;
}
.bordered {
  border: 1px solid #7c7a7a;
}

.download-file {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #0866ff;
  }
}
</style>
