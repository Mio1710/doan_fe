<script setup lang="ts">
const { status, data, lastRefreshedAt, token, getSession, signUp, signIn, signOut } = useAuth()
console.log('data use auth', status, data, lastRefreshedAt, token, getSession, signUp, signIn, signOut)
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
