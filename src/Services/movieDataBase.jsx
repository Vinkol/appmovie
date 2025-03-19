import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
  },
  params: {
    api_key: '6168ee115ea64b36c77cf9808a0a2b36',
  },
})
