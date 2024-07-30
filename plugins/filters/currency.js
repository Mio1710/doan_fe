import Vue from 'vue'

export default function () {
  Vue.filter('currency', (value) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
  })
}
