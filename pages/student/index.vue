<script setup lang="ts">
import TopicRegister from '~/components/student/project/organisms/TopicRegister.vue'
import TopicRegistedSuccess from '~/components/student/project/organisms/TopicRegistedSuccess.vue'
import useGetRegistedTopics from '~/composables/student/use-get-registed-topic'

definePageMeta({
  layout: 'auth',
})

const { items } = useGetRegistedTopics()
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-full">
    <div class="text-lg font-bold text-uppercase">Đăng ký đề tài đồ án</div>
    <v-card class="pa-3 h-full" color="white" variant="flat">
      <topic-register v-if="!items.topic" />

      <topic-registed-success v-else :items />
    </v-card>
  </div>
</template>

<style scoped></style>
