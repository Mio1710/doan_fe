import Vue from 'vue'

export default function () {
  Vue.filter('userImageDefault', (value) => {
    if (!value) return '/images/avatars/default.png'
    return value
  })
}
