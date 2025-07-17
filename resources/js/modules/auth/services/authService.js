import axios from 'axios'

export function loginUser(data) {
  return axios.post('/api/login', data)
}
