<template>
  <v-row dense>
    <v-col cols="6">
      <app-text-field v-model="form.ten" label="Tên lớp" rules="required|max:100" vid="name" />
    </v-col>
    <v-col cols="6">
      <app-text-field v-model="form.maLop" label="Mã lớp" rules="required|max:100" vid="code" />
    </v-col>
    <v-col cols="6">
      <faculty-autocomplete v-model="form.khoaId" label="Khoa" :ma-khoa="form.khoaId" rules="required" vid="khoaId" />
    </v-col>
    <v-col cols="6">
      <teacher-autocomplete v-model="form.gvId" label="Giảng viên" rules="required" vid="teacher_id" />
    </v-col>
    <v-col cols="6">
      <app-date-picker v-model="form.startDate" label="Ngày bắt đầu" rules="required" vid="startDate" />
    </v-col>
    <v-col cols="6">
      <app-date-picker v-model="form.endDate" label="Ngày kết thúc" rules="required" vid="endDate" />
    </v-col>
  </v-row>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import AppTextField from '@/components/common/atoms/AppTextField.vue'
import TeacherAutocomplete from '~/components/common/share/TeacherAutocomplete.vue'
import AppDatePicker from '~/components/common/atoms/AppDatePicker.vue'
import FacultyAutocomplete from '~/components/common/share/FacultyAutocomplete.vue'

export default defineComponent({
  name: 'ClassForm',
  components: { FacultyAutocomplete, AppDatePicker, TeacherAutocomplete, AppTextField },
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const form = computed({
      get: () => props.value,
      set: (val) => {
        emit('input', val)
      }
    })

    return {
      form
    }
  }
})
</script>
