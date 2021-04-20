const data = window.localStorage.getItem('auth')
const initialState = data !== null ? JSON.parse(data) : null

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGGED_IN_USER':
      return { ...state, ...action.payload }
    case 'LOGOUT':
      return action.payload
    default:
      return state
  }
}
