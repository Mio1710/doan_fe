<script setup lang="ts">
import useGetAllStudentGroups from '~/composables/super-teachers/use-get-all-student-group'
import TeacherGroupAutocomplete from '~/components/common/atoms/TeacherGroupAutocomplete.vue'

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
})
const model = defineModel()
const serverOptions = ref({
  page: 1,
  rowsPerPage: 100,
  sortBy: '-created_at',
  sortType: 'asc',
})
const queryBuilder = computed(() => ({
  ...serverOptions.value,
}))

const getFullName = (item) => `Nhóm ${item.id}`
const { items, isLoading } = useGetAllStudentGroups(queryBuilder)
</script>

<template>
  <div class="mt-4">
    <v-autocomplete
      v-model="model"
      chips
      closable-chips
      :item-title="getFullName"
      item-value="id"
      :items="items"
      label="Nhóm sinh viên"
      :loading="isLoading"
      :multiple="multiple"
    />
  </div>
</template>

<style scoped></style>
