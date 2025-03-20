import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
  },
  params: {
    // eslint-disable-next-line no-undef
    api_key: process.env.REACT_APP_API_KEY,
  },
})
