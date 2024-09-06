<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: ['is-super-teacher'],
})
</script>

<template>
  <div>Duyệt đề tài</div>
</template>

<style scoped>

</style>
