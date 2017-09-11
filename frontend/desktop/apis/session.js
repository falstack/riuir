import Http from '~/config/http'

export const getUser = (token) => {
  return Http.get('door/user', {
    params: { token: csrf }
  })
}
