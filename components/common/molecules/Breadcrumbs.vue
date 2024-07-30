<template>
  <v-breadcrumbs class="pa-0 py-2" divider="/" :items="crumbs" />
</template>

<script>
import { computed, defineComponent, useRoute, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Breadcrumbs',
  props: {
    // option to hide path to Home (Dashboard)
    disableHome: {
      type: Boolean,
      default: () => false
    },
    disableCurrentPage: {
      type: Boolean,
      default: () => false
    },

    // customize current page text display in breadcrumbs
    currentPageText: {
      type: String,
      default: () => undefined
    }
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()

    const crumbs = computed(() => {
      let fullPath = route.value.fullPath
      fullPath = fullPath.split('?')[0].split('#')[0]
      if (fullPath.endsWith('/')) {
        fullPath = fullPath.substr(0, fullPath.length - 1)
      }

      const params = fullPath.substring(1).split('/')
      if (params.length > 2 && params[params.length - 2] === 'edit') {
        params.splice(-1)
      }

      const crumbs = []
      let path = ''

      if (!props.disableHome) {
        crumbs.push({
          text: 'Trang chủ',
          disabled: false,
          exact: true,
          to: '/'
        })
      }
      params.forEach((param, index, { length }) => {
        path = `${path}/${param}`
        const match = router.match(path)
        if (match.name !== 'index') {
          let text
          if (typeof (match.params || {}).id === 'string' && path.includes(match.params.id)) {
            // case: has id (uuidString) included in path
            // replace id to constant value for localization purpose
            text = path.replace(match.params.id, 'id')
            text = text.replace(/\//g, '_').slice(1)
          } else {
            text = path.replace(/\//g, '_').slice(1)
          }

          // current page
          if (index === length - 1) {
            if (typeof props.currentPageText === 'string' && props.currentPageText.length > 0) {
              text = props.currentPageText
            }
            if (props.disableCurrentPage !== true) {
              crumbs.push({ text, disabled: true })
            }
          }

          // parent pages
          else {
            crumbs.push({ text, disabled: false, exact: true, to: path + '/' })
          }
        }
      })
      return crumbs
    })

    return {
      crumbs
    }
  }
})
</script>

<style scoped>
.v-application ul,
.v-application ol {
  padding-left: 0;
}
</style>
