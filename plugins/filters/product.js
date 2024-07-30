import Vue from 'vue'

export default function () {
  Vue.filter('productImageDefault', (value) => {
    if (!value) return '/images/product/default.png'
    return value
  })
}
