<script setup lang="ts">
import ResultDetail from "~/components/student/result/molecules/ResultDetail.vue";

definePageMeta({
  layout: 'auth',
})
const { status, data, lastRefreshedAt, token, getSession, signUp, signIn, signOut } = useAuth()
console.log('data use auth', status, data)
</script>

<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="text-lg font-bold">Xem lịch sử làm khóa luận</div>
    <v-card class="pa-2" color="white" variant="flat">
      <ResultDetail />
    </v-card>
  </div>
</template>

<style scoped></style>
