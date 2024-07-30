export default {
  // main navigation - side menu
  menu: [
    {
      text: '',
      key: '',
      items: [
        {
          icon: 'mdi-view-dashboard-outline',
          key: 'menu.dashboard',
          text: 'Dashboard',
          link: '/'
        }
      ]
    },
    {
      text: 'App',
      key: 'menu.app',
      items: [
        {
          icon: 'mdi-cart-outline',
          key: 'menu.orders',
          text: 'Order',
          link: '/orders',
          permission: 'orders.view'
        },
        {
          icon: 'mdi-receipt-text-outline',
          key: 'menu.quotations',
          text: 'Quotation',
          link: '/quotations',
          permission: 'quotations.view'
        },
        {
          icon: 'mdi-cash',
          key: 'menu.debts',
          text: 'Debt',
          link: '/debts',
          permission: 'debts.view'
        },
        {
          icon: 'mdi-meter-gas-outline',
          key: 'menu.products',
          text: 'Product',
          link: '/products',
          permission: 'products.view'
        },
        {
          icon: 'mdi-warehouse',
          key: 'menu.stocks',
          text: 'Stock',
          link: '/stocks',
          permission: 'stocks.view'
        },
        {
          icon: 'mdi-account-group-outline',
          key: 'menu.customers',
          text: 'Customer',
          link: '/customers',
          permission: 'customers.view'
        },
        {
          icon: 'mdi-store-cog-outline',
          key: 'menu.suppliers',
          text: 'Supplier',
          link: '/suppliers',
          permission: 'suppliers.view'
        },
        {
          icon: 'mdi-account-cash  ',
          key: 'menu.revenue',
          text: 'Revenue',
          link: '/revenue',
          permission: 'revenue.view'
        },
        {
          icon: 'mdi-wallet-plus',
          key: 'menu.costs',
          text: 'Total Costs',
          link: '/costs',
          permission: 'costs.view'
        }
      ]
    },
    {
      text: 'System',
      key: 'menu.system',
      items: [
        {
          icon: 'mdi-account-star-outline',
          key: 'menu.admin',
          text: 'Admin',
          link: '/users',
          permission: 'users.view'
        },
        {
          icon: 'mdi-cog-outline',
          key: 'menu.setting',
          text: 'Setting',
          link: '/setting',
          permission: 'roles.view'
        }
      ]
    }
  ]
}
