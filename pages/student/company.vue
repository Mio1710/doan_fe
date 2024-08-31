<script setup lang="ts">
import Notice from "~/components/student/project/molecules/Notice.vue";

definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-full">
    <div class="text-lg font-bold text-uppercase">Đăng ký thực tập doanh nghiệp</div>
    <v-card class="pa-3 h-full" color="white" variant="flat">
      <Notice />
    </v-card>
  </div>
</template>

<style scoped></style>
