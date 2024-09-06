<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: ['is-teacher'],
})
</script>

<template>
  <div>Danh sách đăng ký</div>
</template>

<style scoped></style>
