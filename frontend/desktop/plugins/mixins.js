import Vue from 'vue'

Vue.mixin({
  methods: {
    $validate (scope) {
      const field = this.fields[`$${scope}`]
      return !Object.keys(field).some(key => field[key].invalid || !field[key].validated)
    }
  }
})
