<script setup lang="ts">
import { serialize } from 'object-to-formdata'
import { useQueryClient } from 'vue-query'
import AppForm from '~/components/common/molecules/AppForm.vue'
import AppTextField from '~/components/common/atoms/AppTextField.vue'
import useGetMyReportTopics from '~/composables/student/use-get-my-report-topic'

definePageMeta({
  layout: 'auth',
})
const loading = ref(false)
const initForm = () => ({
  week: '',
  description: '',
  file: null,
})
const form = reactive(initForm())
const { $api, $toast } = useNuxtApp()
const queryClient = useQueryClient()

const onSubmit = () => {
  loading.value = true
  $api.reportTopic
    .createReportTopic(serialize(form))
    .then(() => {
      queryClient.invalidateQueries('my-report-topic')
      form = reactive(initForm())
      $toast.success('Nộp báo cáo thành công')
    })
    .finally(() => {
      loading.value = false
    })
}

const downloadFile = (item) => {
  $api.reportTopic.downloadReportTopic(item.file_key).then((res) => {
    const url = URL.createObjectURL(new Blob([res]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', item.file_name)
    document.body.appendChild(link)
    link.click()
  })
}
const panel = ref([])
const { items, totalItems, isLoading, refetch } = useGetMyReportTopics()
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-full">
    <div class="text-lg font-bold text-uppercase">Báo cáo tiến độ đề tài đồ án</div>
    <v-card class="pa-3 h-full overflow-y-scroll" color="white" variant="flat">
      <app-form v-slot="{ handleSubmit }">
        <app-text-field
          v-model="form.week"
          class="mb-5"
          label="Tuần số"
          name="Tuần số"
          rules="required"
          type="number"
        />
        <v-file-input
          v-model="form.file"
          accept=".doc,.docx,.pdf"
          clearable
          label="File báo cáo"
          name="File báo cáo"
          :prepend-icon="false"
          prepend-inner-icon="mdi-paperclip"
          show-size
          variant="outlined"
        />
        <app-text-field
          v-model="form.description"
          class="mb-4"
          label="Mô tả"
          name="Mô tả"
          rules="required"
          type="textarea"
        />
        <div class="w-full text-center mb-4">
          <v-btn color="success" :loading="loading" size="small" @click="handleSubmit(onSubmit)">Nộp báo cáo</v-btn>
        </div>
      </app-form>
      <div v-if="items">
        <v-expansion-panels v-model="panel" multiple>
          <v-expansion-panel v-for="(item, index) in items" :key="index">
            <v-expansion-panel-title>Tuần {{ item.week }}</v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="d-flex items-center">
                <div>
                  File báo cáo:
                  <span class="cursor-pointer underline text-blue-400" @click="downloadFile(item)">{{ item.file_name }}</span>
                </div>
                <v-spacer />
                <v-btn color="success" height="20" icon="mdi-pencil" size="small" variant="plain" />
              </div>
              <div>
                <div>Mô tả: {{ item.description }}</div>
                <div>Nhận xét của giảng viên:</div>
                <div>{{ item.comment }}</div>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-card>
  </div>
</template>

<style scoped></style>
