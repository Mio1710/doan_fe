import { computed, useRouter } from '@nuxtjs/composition-api'
import { useConditionWatcher } from 'vue-condition-watcher'

export default function (config, ignore = [], sync = false) {
  const history = {
    navigation: 'push',
    ignore
  }
  if (sync) {
    history.sync = useRouter()
  }

  const watcher = useConditionWatcher({
    ...config,
    history
  })

  const page = computed({
    get: () => Number(watcher.conditions.page),
    set: (val) => {
      watcher.conditions.page = val
    }
  })
  const itemsPerPage = computed({
    get: () => Number(watcher.conditions.limit),
    set: (val) => {
      watcher.conditions.limit = val
    }
  })

  return {
    ...watcher,
    page,
    itemsPerPage
  }
}
