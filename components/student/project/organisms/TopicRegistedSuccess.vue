<script setup lang="ts">
import TopicRegisted from '~/components/student/project/molecules/TopicRegisted.vue'
import StudentRegisted from '~/components/student/project/molecules/StudentRegisted.vue'
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <topic-registed :items="items.topic" />
  <student-registed class="mt-6" :items="items.students" />
</template>

<style scoped></style>
