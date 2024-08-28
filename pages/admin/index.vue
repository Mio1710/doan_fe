<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
const { status, data, lastRefreshedAt, token, getSession, signUp, signIn, signOut } = useAuth()
console.log('data use auth', status, data)
</script>

<template>
  <div>Đây là trang admin</div>
</template>

<style scoped></style>
