import Vue from 'vue'

export default function () {
  Vue.filter('companyStatus', (value) => {
    let valueStatus = ''

    switch (value?.status) {
      case '0':
        valueStatus = 'Chờ duyệt'
        break
      case '1':
        valueStatus = 'Đã duyệt'
        break
      case '2':
        valueStatus = 'Đã bị từ chối'
        break
      default:
        valueStatus = 'Chưa đăng ký'
    }

    return valueStatus
  })

  Vue.filter('companyStatusColor', (value) => {
    let color = ''

    switch (value?.status) {
      case '0':
        color = 'warning'
        break
      case '1':
        color = 'success'
        break
      case '2':
        color = 'error'
        break
      default:
        color = 'error'
    }

    return color
  })
}
