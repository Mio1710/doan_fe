<script setup lang="ts">
import useGetTeachers from '~/composables/admin/use-get-teachers'
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

const getFullName = (item) => `${item.maso} - ${item.hodem} ${item.ten}`
const { items, isLoading } = useGetTeachers(queryBuilder)
</script>

<template>
  <div>
    <v-autocomplete
      v-model="model"
      chips
      closable-chips
      :item-title="getFullName"
      item-value="id"
      :items="items"
      label="Giảng viên"
      :loading="isLoading"
      :multiple="multiple"
    />
  </div>
</template>

<style scoped></style>
