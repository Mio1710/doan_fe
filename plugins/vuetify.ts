import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import '@/assets/scss/style.scss'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    defaults: {
      VCard: {
        rounded: 'md',
      },
      VAutocomplete: {
        variant: 'outlined',
        density: 'compact',
        color: 'primary',
        clearable: true,
        hideDetails: 'auto',
      },
      VCombobox: {
        variant: 'outlined',
        density: 'compact',
        color: 'primary',
        clearable: true,
        hideDetails: 'auto',
      },
      VTextField: {
        variant: 'outlined',
        density: 'compact',
        color: 'primary',
        clearable: false,
        hideDetails: 'auto',
        type: 'text',
      },
      VTextarea: {
        variant: 'outlined',
        density: 'compact',
        color: 'primary',
        hideDetails: 'auto',
      },
      VSelect: {
        variant: 'outlined',
        density: 'compact',
        color: 'primary',
        hideDetails: 'auto',
      },
      VListItem: {
        minHeight: '40px',
      },
      VTooltip: {
        location: 'top',
      },
    },
  })
  app.vueApp.use(vuetify)
})
