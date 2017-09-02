import Http from '~/config/http'
import { csrf } from '~/.env'

export const csrfToken = () => {
  return Http.get('door/csrf', {
    params: { token: csrf }
  })
}
