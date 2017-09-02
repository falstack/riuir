import { token } from '~/.env'

export const state = () => ({
  user: null,
  csrf: ''
})

export const mutations = {
  user (state, data) {
    state.user = data
  },

  SET_CSRF (state, data) {
    state.csrf = data
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { app }) {
    const token = await app.$axios.$get('door/csrf', {
      params: { token }
    })
    commit('SET_CSRF', token)
    // return app.$axios.$get('door/csrf', {
    //   params: { token }
    // }).then((res) => {
    //   commit('SET_CSRF', res.data)
    // }).catch((err) => {
    //   console.log(err); // eslint-disable-line
    // })
    // return csrfToken().then((res) => {
    //   commit('SET_CSRF', res.data)
    // }).catch((err) => {
    //   console.log(err); // eslint-disable-line
    // })
  }
}
