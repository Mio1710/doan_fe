<script setup lang="ts">
import FormCard from '~/components/common/molecules/FormCard.vue'

defineProps({
  width: {
    type: String,
    default: '70%',
  },
})
</script>

<template>
  <v-dialog :width="width">
    <form-card>
      <slot />
    </form-card>
  </v-dialog>
</template>

<style scoped></style>
