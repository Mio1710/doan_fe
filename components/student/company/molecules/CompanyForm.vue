<template>
  <v-row dense>
    <v-col cols="12">
      <v-row>
        <v-col cols="12">
          <app-text-field v-model="form.tenCongTy" label="Tên công ty" rules="required|max:100" vid="tenCongTy" />
        </v-col>
        <v-col cols="12">
          <app-text-field v-model="form.viTri" label="Vị trí làm" rules="required|max:100" vid="viTri" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="6">
          <teacher-autocomplete label="Giảng viên" readonly :value="myCompany.giangvien" vid="gv" />
        </v-col>
        <v-col cols="6">
          <class-autocomplete label="Lớp" readonly :value="myCompany.classroom" vid="lop" />
        </v-col>
        <v-col cols="6">
          <app-date-picker v-model="form.startDate" label="Ngày bắt đầu" rules="required" vid="startDate" />
        </v-col>
        <v-col cols="6">
          <app-date-picker v-model="form.endDate" label="Ngày kết thúc" rules="required" vid="endDate" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import AppTextField from '@/components/common/atoms/AppTextField.vue'
import TeacherAutocomplete from '~/components/common/share/TeacherAutocomplete.vue'
import AppDatePicker from '~/components/common/atoms/AppDatePicker.vue'
import ClassAutocomplete from '~/components/common/share/ClassAutocomplete.vue'

export default defineComponent({
  name: 'CompanyForm',
  components: { AppDatePicker, TeacherAutocomplete, ClassAutocomplete, AppTextField },
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    myCompany: {
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
