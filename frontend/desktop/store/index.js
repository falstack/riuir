export const state = () => ({
  user: null
})

export const mutations = {
  user (state, data) {
    state.user = data
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { req }) {
    console.log(req.headers); // eslint-disable-line
  }
}
