import { chain, union } from 'lodash'
import { inputProps } from '@/configs/vuetify'

export default {
  name: 'InputMixin',
  props: {
    context: {
      type: Object,
      required: true
    },
    inputProps: {
      type: Object,
      default: () => ({ ...inputProps })
    }
  },
  computed: {
    validationErrors() {
      return union(this.context.errors, this.context.visibleValidationErrors)
    },
    isRequired() {
      return chain(this.context.rules).find({ ruleName: 'required' }).size() > 0
    }
  }
}
