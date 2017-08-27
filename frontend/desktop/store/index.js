export const state = () => ({
  user: null
})

export const mutations = {
  user (state, data) {
    state.user = data
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.user) {
      commit('user', req.session.user)
    }
  }
}
