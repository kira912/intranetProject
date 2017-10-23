import axios from 'axios'

function errHandler(err) {
  console.error('API', err)
  
}

const auth = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export function login(username, password) {
 return auth.post('/login', {
    username,
    password,
  })
  .then(response => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`  
    return response.data
  })
  .catch(errHandler)
}