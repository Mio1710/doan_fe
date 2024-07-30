import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend, configure } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

const messages = {
  required: '{_field_} không được để trống',
  email: 'Email không hợp lệ',
  min: 'Giá trị {_field_} lớn hơn {length} ký tự',
  max: 'Giá trị {_field_} nhỏ hơn {length} ký tự',
  confirmed: 'Giá trị {_field_} không khớp {target}',
  numeric: 'Giá trị {_field_} phải là số',
  min_value: 'Giá trị {_field_} phải lớn hơn {min}',
  max_value: 'Giá trị {_field_} phải nhỏ hơn {max}'
}

/* eslint-disable */
Object.keys(rules).forEach((item) => {
  extend(item, {
    ...rules[item],
    message: messages[item]
  })
})
/* eslint-enable */

export default function () {
  configure({
    defaultMessage: (_, values) => 'Giá trị không hợp lệ' + values._rule_ + values
  })

  extend('hardPassWord', {
    validate: (value) => {
      const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
      return strongRegex.test(value)
    },
    message: 'Mật khẩu phải bao gồm ít nhât: 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt'
  })
}
