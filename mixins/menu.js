export default {
  name: 'MenuMixin',
  methods: {
    hasAccess(item) {
      if (item.roles) {
        return item.roles.includes(this.$auth.user.role)
      }

      if (item.permission) {
        return this.$acl.anyPermission(item.permission)
      }

      if (item.module) {
        return this.$auth.user.modules.includes(item.module)
      }

      return true
    },
    getItems(items, root) {
      if (items && items.length !== 0) {
        return items.map((item) => ({
          icon: item.icon,
          title: root.$t(item.key),
          route: item.link,
          roles: item.roles ? item.roles : [],
          hasPermission: item.permission ? root.$acl.permission(item.permission) : true
        }))
      }

      return []
    }
  }
}
