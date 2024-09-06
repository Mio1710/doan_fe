<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: ['is-teacher'],
})
</script>

<template>
  <div>Cập nhật đề tài</div>
</template>

<style scoped></style>
