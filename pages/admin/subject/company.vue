<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: ['is-super-teacher'],
})
</script>

<template>
  <div>Danh sách đăng ký thực tập</div>
</template>

<style scoped>

</style>
