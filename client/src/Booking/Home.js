import { useSelector } from 'react-redux'

const Home = () => {
  const { user } = useSelector(state => ({ ...state }))
  console.log('state:', user)
  return <div className='container-fluid h1 p-5 text-center'>Home Page</div>
}

export default Home
