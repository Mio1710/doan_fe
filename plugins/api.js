import api from '@/api'

export default function ({ $axios, $config }, inject) {
  inject('api', api($axios, $config))
}
