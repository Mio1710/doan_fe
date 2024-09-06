<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: ['is-super-teacher'],
})
</script>

<template>
  <div>Toàn danh sách đăng ký</div>
</template>

<style scoped>

</style>
