<script setup lang="ts">
import useGetListTeacherGroups from "~/composables/super-teachers/use-get-list-teacher-group";

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
})
const model = defineModel()
const search = ref('')
const serverOptions = ref({
  page: 1,
  rowsPerPage: 100,
  sortBy: '-created_at',
  sortType: 'asc',
})
const queryBuilder = computed(() => ({
  ...serverOptions.value,
}))

const { items, isLoading } = useGetListTeacherGroups(queryBuilder)
</script>

<template>
  <div>
    <v-autocomplete
      v-model="model"
      chips
      closable-chips
      item-title="name"
      item-value="id"
      :items="items"
      label="Nhóm giảng viên phản biện"
      :loading="isLoading"
      :multiple="multiple"
    />
  </div>
</template>

<style scoped></style>
