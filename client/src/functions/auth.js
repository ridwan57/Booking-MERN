import axios from 'axios'

export const registerRequest = async user =>
  await axios.post(`${process.env.REACT_APP_API}/register`, user)

export const loginRequest = async user =>
  await axios.post(`${process.env.REACT_APP_API}/login`, user)
