<template>
  <v-overlay v-model="loading" opacity="0.8" z-index="1000">
    <v-progress-circular indeterminate size="64" />
  </v-overlay>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppLoading',
  setup() {
    const loading = ref(false)

    const start = () => {
      loading.value = true
    }
    const finish = () => {
      loading.value = false
    }

    return {
      loading,
      start,
      finish
    }
  }
})
</script>
