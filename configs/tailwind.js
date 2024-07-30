const colors = require('tailwindcss/colors')

delete colors.lightBlue
delete colors.warmGray
delete colors.trueGray
delete colors.coolGray
delete colors.blueGray

module.exports = {
  prefix: 'tw-',
  important: true,
  darkMode: 'class',
  content: [],
  theme: {
    colors: {
      ...colors,
      primary: 'var(--v-primary-base)',
      surface: 'var(--v-surface-base)',
      background: 'var(--v-background-base)',
      secondary: 'var(--v-secondary-base)',
      accent: 'var(--v-accent-base)',
      info: 'var(--v-info-base)',
      warning: 'var(--v-warning-base)',
      success: 'var(--v-success-base)',
      error: 'var(--v-error-base)'
    },
    screens: {
      xs: '0px',
      sm: '600px',
      md: '960px',
      lg: '1264px',
      xl: '1904px'
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
