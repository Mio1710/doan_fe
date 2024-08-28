<script setup lang="ts">
import { StudentMenu } from '~/configs/navigation'

const opened = ref<number[]>([])
onMounted(() => {
  opened.value = StudentMenu.map((group) => group.id ?? 0)
})
</script>
<template>
  <v-list nav :opened="opened">
    <v-list-group v-for="group in StudentMenu" :key="group.id" class="navigation" :value="group.id">
      <template #activator="{ props }">
        <v-list-item v-bind="props" :prepend-icon="group.icon" :title="group.title" />
      </template>

      <v-list-item
        v-for="item in group.children"
        :key="item.title"
        :title="item.title"
        :to="item.to"
        :value="item.title"
      >
        <template #prepend>
          <v-icon size="small">{{ item.icon }}</v-icon>
        </template>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<style lang="scss"></style>
