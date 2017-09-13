export const state = () => ({
  user: null,
  token: '',
  login: false
})

export const mutations = {
  SET_USER (state, data) {
    state.user = data
  },
  SET_TOKEN (state, data) {
    state.token = data
  },
  TOGGLE_LOGIN (state, data) {
    state.login = data
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { req, app }) {
    const cookie = req.headers.cookie
    if (cookie) {
      let token = ''
      cookie.split('; ').forEach(item => {
        const temp = item.split('=')
        if (temp[0] === 'JWT-TOKEN') {
          token = temp[1]
        }
      })
      app.$axios.setToken(token, 'Bearer')
      const user = await app.$axios.$get('door/user')
      if (user) {
        commit('SET_USER', user)
        commit('SET_TOKEN', token)
        commit('TOGGLE_LOGIN', true)
      }
    }
  },
  SIGN_OUT ({ commit }, vue) {
    vue.$cookie.remove('JWT-TOKEN')
    vue.$axios.$get('door/logout')
    commit('TOGGLE_LOGIN', false)
    commit('SET_TOKEN', '')
    commit('SET_USER', null)
  }
}
