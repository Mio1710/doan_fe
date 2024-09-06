<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: ['is-admin'],
})
</script>

<template>
  <div>Import SV làm khóa luận</div>
</template>

<style scoped></style>
