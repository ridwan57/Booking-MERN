import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import Home from './Booking/Home'
import TopNav from './components/TopNav'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DashBoard from './user/DashBoard'
import PrivateRoute from './components/PrivateRoute'
import DashboardSeller from './user/DashboardSeller'
import NewHotel from './hotels/NewHotel'

function App () {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer position='top-center' />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/dashboard' component={DashBoard} />
        <PrivateRoute
          exact
          path='/dashboard/seller'
          component={DashboardSeller}
        />
        <PrivateRoute exact path='/hotels/new' component={NewHotel} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
