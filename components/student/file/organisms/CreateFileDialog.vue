<template>
  <form-dialog
    v-if="dialog"
    v-model="dialog"
    :loading="loading"
    submit-text="Nộp"
    :title="currentWeek === 0 ? 'Nộp báo cáo cuối kỳ' : 'Nộp báo cáo tuần: ' + currentWeek"
    width="700px"
    @close="dialog = false"
    @submit="createCategory"
  >
    <file-form v-model="form" />
  </form-dialog>
</template>

<script>
import { computed, defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import { useQueryClient } from 'vue-query'
import FileForm from '@/components/student/file/molecules/FileForm.vue'
import FormDialog from '@/components/common/organisms/FormDialog'

export default defineComponent({
  name: 'CreateFileDialog',
  components: { FormDialog, FileForm },
  props: {
    currentFile: {
      type: Object,
      default: () => ({
        report_file: null,
        commit: null,
        date: null,
        report_type: null,
        sv_id: null
      })
    }
  },

  setup(props) {
    const dialog = ref(false)
    const { $api } = useContext()
    const queryClient = useQueryClient()
    const loading = ref(false)
    const currentWeek = ref(0)

    const initialForm = () => ({
      report_file: null,
      commit: null,
      date: null,
      report_type: null,
      sv_id: null
    })
    const form = computed(() => props.currentFile || initialForm())

    const open = (week) => {
      dialog.value = true
      form.value = initialForm()
      form.value.report_type = week
      currentWeek.value = week
      console.log('week', week, form.value)
    }

    const createCategory = () => {
      // create formData
      const formData = new FormData()
      formData.append('report_file', form.value.report_file)
      formData.append('commit', form.value.commit)
      formData.append('report_type', form.value.report_type)
      loading.value = true
      $api.file
        .createFile(formData)
        .then(() => {
          dialog.value = false
          queryClient.invalidateQueries('files')
        })
        .finally(() => {
          loading.value = false
        })
    }

    const onFileChange = (file) => {
      if (file) {
        form.value.report_file = file
      } else {
        form.value.report_file = null
      }
    }

    return {
      dialog,
      form,
      createCategory,
      loading,
      open,
      onFileChange,
      currentWeek
    }
  }
})
</script>

<style scoped></style>
