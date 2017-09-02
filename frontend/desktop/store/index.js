// import { csrfToken } from '~/apis/session'

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
    return app.$axios.$get('door/csrf', {
      params: { token: '...' }
    }).then((res) => {
      commit('SET_CSRF', res.data)
    })
    // return csrfToken().then((res) => {
    //   commit('SET_CSRF', res.data)
    // }).catch((err) => {
    //   console.log(err); // eslint-disable-line
    // })
  }
}
