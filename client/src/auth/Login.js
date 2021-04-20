import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import useLocalStorage from '../customHooks/useLocalStorage'
import { LoginAction } from '../actions/auth'
import LoginForm from '../components/LoginForm'
import { loginRequest } from '../functions/auth'

const Login = ({ history }) => {
  const [email, setEmail] = useState('ridwan@gmail.com')
  const [password, setPassword] = useState('123456')
  const [value, setValue] = useLocalStorage('auth')
  const dispatch = useDispatch()

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('SEND LOGIN DATA', { email, password })
    try {
      let res = await loginRequest({ email, password })

      if (res.data) {
        console.log(
          'SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT ===> '
        )
        console.log(res.data)
        dispatch(LoginAction(res.data))
        setValue(res.data)
        history.push('/dashboard')
      }
    } catch (err) {
      console.log(err)
      if (err.response.status === 400) toast.error(err.response.data)
    }
  }

  return (
    <>
      <div className='container-fluid bg-secondary p-5 text-center'>
        <h1>Login</h1>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <LoginForm
              handleSubmit={handleSubmit}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
