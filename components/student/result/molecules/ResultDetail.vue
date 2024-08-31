<script setup lang="ts">
import FirstResult from '~/components/student/result/molecules/FirstResult.vue'
import FormCard from '~/components/common/molecules/FormCard.vue'
import SecondResult from '~/components/student/result/molecules/SecondResult.vue'
</script>

<template>
  <form-card can-cancel cancel-text="Đóng" hide-submit title="Điểm quá trình của sinh viên: Nguyễn Thị Lê">
    <first-result class="mb-5" />
    <second-result />
  </form-card>
</template>
