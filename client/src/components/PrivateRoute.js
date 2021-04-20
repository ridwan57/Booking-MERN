import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ ...rest }) => {
  console.log('rest:', rest)
  //   console.log('children:', children)
  const { auth } = useSelector(state => ({ ...state }))
  return auth && auth.token ? <Route {...rest} /> : <Redirect to='/login' />
}

export default PrivateRoute
