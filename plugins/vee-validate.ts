import { defineRule, configure, Form, Field, ErrorMessage } from 'vee-validate'
import { all } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import vi from '@vee-validate/i18n/dist/locale/vi.json'

export default defineNuxtPlugin((nuxtApp) => {
  Object.entries(all).forEach(([name, rule]) => {
    defineRule(name, rule)
  })

  nuxtApp.vueApp.component('VeeForm', Form)
  nuxtApp.vueApp.component('VeeField', Field)
  nuxtApp.vueApp.component('VeeErrorMessage', ErrorMessage)

  configure({
    // Generates an English message locale generator
    generateMessage: localize('vi', vi),
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
  })
})
