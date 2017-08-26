import Vue from 'vue'
import VeeValidate from 'vee-validate'

const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'en',
  dictionary: null,
  strict: true,
  classes: true,
  classNames: {
    touched: 'focus',       // the control has been blurred
    untouched: 'blur',      // the control hasn't been blurred
    valid: 'valid',         // model is valid
    invalid: 'invalid',     // model is invalid
    pristine: 'pristine',   // control has not been interacted with
    dirty: 'dirty'          // control has been interacted with
  },
  events: 'input|blur',
  inject: true,
  validity: true,
  aria: false
}

Vue.use(VeeValidate, config)
