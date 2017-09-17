import axios from 'axios'

const http = axios.create({
  headers: {
    'Accept': 'application/json',
    'X-CSRF-TOKEN': document.getElementById('_csrf').getAttribute('content')
  },
  timeout: 10000
})

http.interceptors.request.use((config) => {
  return config
})

http.interceptors.response.use((res) => {
  // Do something with response data
  return res;
}, (err) => {
  // Do something with response error
  return Promise.reject(err.response.data);
})

export default http
