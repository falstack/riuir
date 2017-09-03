export const state = () => ({
  user: null
})

export const mutations = {
  user (state, data) {
    state.user = data
  }
}

export const actions = {
  // async nuxtServerInit ({ commit }, { app }) {
  //   const data = await app.$axios.$get('door/csrf', {
  //     params: { token }
  //   })
  // }
}
