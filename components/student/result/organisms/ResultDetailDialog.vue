<script setup lang="ts">
import AppDialog from '~/components/common/organisms/AppDialog.vue'
import ResultDetail from '~/components/student/result/molecules/ResultDetail.vue'

const btn = ref(null)
</script>
<template>
  <v-btn ref="btn" rounded variant="text">
    <v-icon color="success">mdi-eye</v-icon>
  </v-btn>

  <app-dialog :activator="btn" title="Điểm quá trình của sinh viên: Nguyễn Thị Lê" with="80%">
    <result-detail />
  </app-dialog>
</template>
