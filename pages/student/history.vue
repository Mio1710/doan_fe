<script setup lang="ts">
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
      <p>đây là nội dung</p>
    </v-card>
  </div>
</template>

<style scoped></style>
