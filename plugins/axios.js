import { stringify } from 'qs'

export default function ({ $axios, store, redirect, $dialog }) {
  $axios.onRequest((config) => {
    config.paramsSerializer = (params) => stringify(params, { encode: false, arrayFormat: 'comma' })
  })

  $axios.onResponse((response) => {
    return response
  })

  $axios.onError((error) => {
    if (error.response?.data?.code === 'required_admin') {
      redirect('/')
    }

    const code = error.response?.status
    console.log('code', code)
    if (code === 401) {
      redirect('/login')
    }

    if (error.response?.data?.msg) {
      console.log('errorrrrrrr', error.response?.data)
      $dialog.notify.error(error.response?.data?.msg || 'Đã có lỗi xảy ra, vui lòng thử lại!')
    }

    if (error.response?.data?.error?.fields) {
      store.commit('form/VALIDATION_ERRORS', error.response?.data?.error?.fields)
    }
  })
}
