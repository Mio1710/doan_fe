<script setup lang="ts">
import { StudentMenu, TeacherMenu } from '~/configs/navigation'
import type { menu } from '~/types/config'

const opened = ref<number[]>([])
const { data } = useAuth()
const navigation = ref<menu[]>([])
onMounted(() => {
  if (data.value?.role === 'admin') {
    navigation.value = TeacherMenu
    opened.value = navigation.value.map((group) => group.id ?? 0)
  } else if (data.value?.role === 'student') {
    navigation.value = StudentMenu
    opened.value = navigation.value.map((group) => group.id ?? 0)
  }
})
</script>
<template>
  <v-list v-if="navigation" nav :opened="opened">
    <v-list-group v-for="group in navigation" :key="group.id" class="navigation" :value="group.id">
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
