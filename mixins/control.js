import { isString } from 'lodash'

export default {
  name: 'ControlMixin',
  props: {
    value: {
      type: [String, Number, Boolean, Array, Object, File],
      default: null
    },
    interactionMode: {
      type: String,
      default: 'aggressive'
    },
    vid: {
      type: String,
      default: ''
    },
    rules: {
      type: [Object, String],
      default: null
    },
    name: {
      type: String,
      default: ''
    },
    dense: {
      type: Boolean,
      default: true
    },
    outlined: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    innerValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    isRequired() {
      return (
        !!this.$attrs.label &&
        this.rules &&
        (isString(this.rules)
          ? this.rules.split('|').includes('required')
          : Object.keys(this.rules).includes('required'))
      )
    },
    isEmail() {
      return (
        !!this.$attrs.label &&
        this.rules &&
        (isString(this.rules) ? this.rules.split('|').includes('email') : Object.keys(this.rules).includes('email'))
      )
    }
  },
  watch: {
    innerValue(val) {
      if (this.isEmail) {
        this.innerValue = val.replace(/(^\s*)|(\s*$)/gi, '')
      }
    }
  },
  methods: {
    handlePaste(event) {
      if (this.isEmail) {
        event.preventDefault()
        const clipboardData = event.clipboardData || window.clipboardData
        const pastedText = clipboardData.getData('text')
        this.innerValue = pastedText.replace(/\s/g, '')
      }
    },
    keyDownSpace(event) {
      if (this.isEmail) {
        event.preventDefault()
      }
    }
  }
}
