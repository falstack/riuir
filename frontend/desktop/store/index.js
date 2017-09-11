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
    const cookie = req.headers.cookie
    if (cookie) {
      let token = ''
      cookie.split('; ').forEach(item => {
        const temp = item.split('=')
        if (temp[0] === 'JWT-TOKEN') {
          token = temp[1]
        }
      })
      console.log(token); // eslint-disable-line
    }
  }
}
