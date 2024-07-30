<template>
  <v-card v-if="myCompany.company" class="pa-4 d-flex items-center" min-height="400" width="100%">
    <div class="w-full">
      <div class="flex justify-end items-start w-full gap-2">
        <v-btn v-if="isStudent && myCompany.company.status === '0'" color="warning" dark small>Chờ duyệt</v-btn>
        <v-btn v-else-if="myCompany.company.status === '1'" color="success" dark small>Đã duyệt</v-btn>
        <v-btn v-else-if="isStudent && myCompany.company.status === '2'" color="error" dark small>Bị từ chối</v-btn>
        <v-btn v-if="isStudent && myCompany.company.status === '2'" color="primary" dark small @click="onUpdateCompany">
          Cập nhật thông tin công ty
        </v-btn>
        <v-btn v-if="!isStudent && myCompany.company.status === '2'" color="error" dark small>Đã từ chối</v-btn>
        <v-btn v-if="!isStudent && myCompany.company.status !== '1'" color="success" small @click="acceptCompany">
          Phê duyệt
        </v-btn>
        <v-btn
          v-if="!isStudent && myCompany.company.status === '0'"
          color="error"
          outlined
          small
          @click="rejectCompany"
        >
          Từ chối
        </v-btn>
      </div>
      <h1 class="text-h6 text-center font-weight-bold">Thông tin thực tập doanh nghiệp</h1>
      <hr class="my-divider" />
      <v-row>
        <v-col cols="6">
          <p>
            <strong>Họ tên sinh viên:</strong>
            {{ myCompany.fullName }}
          </p>
          <p>
            <strong>MSSV:</strong>
            {{ myCompany.maso }}
          </p>
          <p>
            <strong>Lớp:</strong>
            {{ myCompany.classroom.ten }}
          </p>
          <p>
            <strong>Giáo viên hướng dẫn:</strong>
            {{ myCompany.giangvien.fullName }}
          </p>
        </v-col>
        <v-col cols="6">
          <p>
            <strong>Tên công ty:</strong>
            {{ myCompany.company.tenCongTy }}
          </p>
          <p>
            <strong>Vị trí làm:</strong>
            {{ myCompany.company.viTri }}
          </p>
          <p>
            <strong>Thời gian bắt đầu:</strong>
            {{ myCompany.company.startDate | formatDate }}
          </p>
          <p>
            <strong>Thời gian kết thúc:</strong>
            {{ myCompany.company.endDate | formatDate }}
          </p>
        </v-col>
      </v-row>
      <hr class="my-divider" />
      <v-row v-if="myCompany.company.status === '1'">
        <v-col cols="12">
          <h1 class="text-h7 text-center font-weight-bold">Nộp báo cáo hàng tuần</h1>
          <div class="p-6">
            <v-row v-for="week in 10" :key="week">
              <v-col cols="12">
                <div class="d-flex">
                  <strong>Tuần {{ week }}:</strong>
                  <div v-if="getItemWeek(week)" class="ml-2">{{ getItemWeek(week).commit }}</div>
                  <v-spacer />
                  <v-btn v-if="isStudent" color="primary" outlined small @click="createFile(week)">Bài nộp</v-btn>
                  <v-btn v-else-if="getItemWeek(week)" color="primary" outlined small @click="downloadFile(week)">
                    Download
                  </v-btn>
                </div>
                <!--show report-->
                <div>
                  <div v-if="isUploaded(week)">
                    <div class="d-flex">
                      <v-icon class="mr-2" color="primary">mdi-file-word</v-icon>
                      <span class="download-file" @click="downloadFile(week)">
                        {{ getItemWeek(week).report_file }}
                      </span>
                    </div>
                  </div>
                  <div v-else>
                    <p>Chưa nộp báo cáo cho tuần này</p>
                  </div>
                </div>
              </v-col>
              <v-divider class="p-1" />
            </v-row>
          </div>
          <div class="px-6">
            <div class="d-flex">
              <strong>Báo cáo cuối kỳ</strong>
              <v-spacer />
              <v-btn v-if="isStudent" color="primary" outlined small @click="createFile(0)">Bài nộp</v-btn>
            </div>
            <div>
              <div v-if="isUploaded(0)">
                <div class="d-flex">
                  <v-icon class="mr-2" color="primary">mdi-file-word</v-icon>
                  <span class="download-file" @click="downloadFile(0)">
                    {{ getItemWeek(0).report_file }}
                  </span>
                </div>
              </div>
              <div v-else>
                <p>Chưa nộp báo cáo cho tuần này</p>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12">
          <form-card
            :can-cancel="false"
            :hidden-actions="isStudent"
            hidden-title
            submit-text="Lưu điểm và đánh giá"
            @submit="updateReport"
          >
            <v-row class="px-4">
              <v-col cols="12">
                <!-- Ô đánh giá-->
                <strong>Đánh giá của giảng viên:</strong>
                <div v-if="isStudent">
                  <span v-if="myCompany.report">
                    {{ myCompany.report.danhgia }}
                  </span>
                </div>
                <app-textarea v-else v-model="formReport.danhgia" name="Đánh giá của giảng viên" />
              </v-col>
            </v-row>
            <v-row class="px-4">
              <v-col cols="3">
                <strong>Điểm giảng viên:</strong>
                <div v-if="isStudent">
                  <span v-if="myCompany.report">
                    {{ myCompany.report.diem }}
                  </span>
                </div>
                <app-text-field
                  v-else
                  v-model="formReport.diem"
                  name="Điểm giảng viên"
                  rules="numeric|min_value:0|max_value:10"
                />
              </v-col>
              <v-col cols="3">
                <strong>Điểm doanh nghiệp:</strong>
                <div v-if="isStudent">
                  <span v-if="myCompany.report">
                    {{ myCompany.report.diemDN }}
                  </span>
                </div>
                <app-text-field
                  v-else
                  v-model="formReport.diemDN"
                  name="Điểm doanh nghiệp"
                  rules="numeric|min_value:0|max_value:10"
                />
              </v-col>
              <v-col cols="3" />
            </v-row>
          </form-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12">
          <h2 class="text-center">Đang chờ giảng viên phê duyệt</h2>
        </v-col>
      </v-row>
      <create-file-dialog ref="createFileDialog" :current-file="currentFile" />
    </div>
  </v-card>
</template>

<script>
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import CreateFileDialog from '~/components/student/file/organisms/CreateFileDialog.vue'
import { useGetStudentFiles } from '~/composables'
import AppTextField from '~/components/common/atoms/AppTextField.vue'
import AppTextarea from '~/components/common/atoms/AppTextarea.vue'
import FormCard from '~/components/common/molecules/FormCard.vue'

export default defineComponent({
  name: 'StudentDetail',
  components: {
    FormCard,
    AppTextarea,
    AppTextField,
    CreateFileDialog
  },
  props: {
    myCompany: {
      type: Object,
      required: true
    },
    isStudent: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const { $api, $auth } = useContext()
    const queryClient = useQueryClient()
    const query = ref({
      filters: {
        svId: props.myCompany.id ?? $auth.user.id
      },
      sorts: '-created_at',
      page: 1,
      limit: 100
    })
    const currentFile = ref({})
    const { items } = useGetStudentFiles(query)

    const createFileDialog = ref(null)
    const createFile = (week) => {
      currentFile.value = getItemWeek(week)
      createFileDialog.value.open(week)
    }

    const isUploaded = (week) => {
      return items.value.some((item) => item.week === week)
    }

    const getItemWeek = (week) => {
      return items.value.find((item) => item.week === week)
    }

    const formReport = ref({
      danhgia: props.myCompany.report?.danhgia ?? '',
      diem: props.myCompany.report?.diem ?? null,
      diemDN: props.myCompany.report?.diemDN ?? null
    })

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

    const updateReport = () => {
      $api.student.updateReport(props.myCompany.id, formReport.value)
    }

    const acceptCompany = () => {
      $api.teacher.acceptCompany(props.myCompany.id).then(() => {
        emit('acceptCompany')
        queryClient.invalidateQueries('current-students')
      })
    }

    const rejectCompany = () => {
      $api.teacher.rejectCompany(props.myCompany.id).then(() => {
        emit('rejectCompany')
        queryClient.invalidateQueries('current-students')
      })
    }

    const onUpdateCompany = () => {
      emit('updateCompany')
    }
    return {
      query,
      createFile,
      createFileDialog,
      items,
      isUploaded,
      getItemWeek,
      downloadFile,
      formReport,
      updateReport,
      acceptCompany,
      currentFile,
      rejectCompany,
      onUpdateCompany
    }
  }
})
</script>
