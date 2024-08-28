<script setup lang="ts">
import TeacherResult from "~/components/student/result/organisms/TeacherResult.vue";

definePageMeta({
  layout: 'auth',
})
const { status, data, lastRefreshedAt, token, getSession, signUp, signIn, signOut } = useAuth()
console.log('data use auth', status, data)
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
