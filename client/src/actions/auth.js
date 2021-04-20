import { userTypes } from '../types/actionTypes'

export const LoginAction = data => ({
  type: userTypes.LOGGED_IN_USER,
  payload: data
})

export const LogoutAction = data => ({
  type: userTypes.LOGOUT,
  payload: null
})
