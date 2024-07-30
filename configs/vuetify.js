import theme from '@/configs/theme'

export default {
  theme: {
    dark: theme.globalTheme === 'dark',
    options: {
      customProperties: true
    },
    themes: {
      light: theme.light
    }
  }
}
