import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import RegisterForm from '../components/RegisterForm'
import { registerRequest } from '../functions/auth'

const Register = ({ history }) => {
  const [name, setName] = useState('ridwan')
  const [email, setEmail] = useState('ridwan@gmail.com')
  const [password, setPassword] = useState('123456')
  const [loading, setLoading] = useState(false)
  const user = { name, email, password }

  const handleSubmit = async e => {
    setLoading(true)
    e.preventDefault()
    // console.table({ name, email, password })

    try {
      const res = await registerRequest(user)
      setLoading(false)

      console.log('REGISTER USER ===> ', res)
      if (res.data.ok) {
        toast.success('REGISTER SUCCESS PLEASE LOGIN')
        history.push('/login')
      }
    } catch (err) {
      // setLoading(false)

      console.log(err)
      if (err.response.status === 400) {
        toast.error(err.response.data)
      }
    }
  }

  return (
    <>
      <div className='container-fluid bg-secondary p-5 text-center'>
        <h1>Register</h1>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <RegisterForm
              password={password}
              setPassword={setPassword}
              email={email}
              setEmail={setEmail}
              name={name}
              setName={setName}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
