import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL

export const baseApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
