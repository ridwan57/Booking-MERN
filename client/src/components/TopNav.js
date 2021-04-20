import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { LogoutAction } from '../actions/auth'

const TopNav = () => {
  const { auth } = useSelector(state => ({ ...state }))

  const dispatch = useDispatch()
  const history = useHistory()
  const logout = () => {
    dispatch(LogoutAction())
    window.localStorage.removeItem('auth')
    history.push('/login')
  }

  return (
    <div className='nav bg-light d-flex justify-content-between'>
      <Link className='nav-link' to='/'>
        Home
      </Link>

      {auth !== null && (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Link className='nav-link' to='/dashboard'>
          Dashboard
        </Link>
      )}

      {auth === null && (
        <>
          <Link className='nav-link' to='/login'>
            Login
          </Link>
          <Link className='nav-link' to='/register'>
            Register
          </Link>
        </>
      )}
      {auth !== null && (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a onClick={() => logout()} className='nav-link'>
          Logout
        </a>
      )}
    </div>
  )
}
export default TopNav
