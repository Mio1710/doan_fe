<template>
  <v-list dense nav>
    <nav-menu-item v-for="(item, index) in menu" :key="index" :menu-item="item" small subgroup />
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
        name: 'Dashboard',
        link: '/sale/dashboard',
        key: 1,
        icon: 'mdi-home'
      },
      {
        name: 'Quản lý sản phẩm',
        key: 2,
        link: '/sale/products',
        icon: 'mdi-package-variant-closed'
      },
      {
        name: 'Quản lý đơn hàng',
        key: 3,
        link: '/sale/orders',
        icon: 'mdi-order-bool-ascending-variant'
      }
    ]

    return {
      menu
    }
  }
}
</script>
