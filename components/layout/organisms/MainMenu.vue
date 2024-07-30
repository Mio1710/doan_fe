<template>
  <v-list dense nav>
    <nav-menu-item v-for="(item, index) in menu" :key="index" :menu-item="item" small />
  </v-list>
</template>

<script>
import NavMenuItem from '@/components/layout/atoms/NavMenuItem.vue'

export default {
  components: {
    NavMenuItem
  },
  data() {
    const menu = [
      {
        name: 'Lớp học phần',
        link: '/admin/classes',
        key: 1,
        icon: 'mdi-school'
      },
      {
        name: 'Giảng viên',
        key: 2,
        link: '/admin/teachers',
        icon: 'mdi-human-male-board'
      },
      {
        name: 'Sinh viên',
        key: 8,
        link: '/admin/students',
        icon: 'mdi-account-school'
      },
      {
        name: 'Quản lý khoa',
        key: 7,
        link: '/admin/faculties',
        icon: 'mdi-account'
      }
    ]

    return {
      menu
    }
  }
}
</script>
