<script setup lang="ts">
import TeacherGroup from '~/components/admin/super/organism/TeacherGroup.vue'
import StudentGroup from "~/components/admin/super/organism/StudentGroup.vue";

definePageMeta({
  layout: 'auth',
  middleware: ['is-super-teacher'],
})
const tab = ref(0)
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-full">
    <div class="text-lg font-bold text-uppercase">Phân nhóm giảng viên phản biện</div>
    <v-card class="pb-3 h-full" color="white" variant="flat">
      <v-tabs v-model="tab" density="compact">
        <v-tab :value="0">Phân công</v-tab>
        <v-tab :value="1">Nhóm giảng viên</v-tab>
      </v-tabs>
      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <student-group />
          </v-tabs-window-item>

          <v-tabs-window-item value="two" >
            <teacher-group />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped></style>
