<script setup lang="ts">
import TeacherResult from "~/components/student/result/organisms/TeacherResult.vue";

definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="text-lg font-bold">Kết quả chấm từ GVHD</div>
    <v-card class="pa-3" color="white" variant="flat">
      <TeacherResult />
    </v-card>
  </div>
</template>

<style scoped></style>
