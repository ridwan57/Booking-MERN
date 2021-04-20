import { errorMessage } from '../error'
import User from '../models/user'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  console.log('req:', req.body)

  const { name, email, password } = req.body

  if (!name || !email || !password)
    return errorMessage(400, 'Invalid user info', res)

  if (password.length < 6) {
    return errorMessage(400, 'Password atLeast 6 characters long', res)
  }

  const userExist = await User.find({ email }).exec()
  console.log('userExist:', userExist)
  if (userExist && userExist.length > 0) {
    // return res.status(400).send('Email is taken')
    return errorMessage(400, 'Email is taken', res)
  }
  try {
    const newUser = await new User(req.body).save()
    console.log('newUser created:'.toUpperCase(), newUser)
    return res.json({ ok: true })
  } catch (error) {
    console.log('error:', error)

    return errorMessage(400, 'Something wrong here', res)
  }
}

export const login = async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body
  try {
    // check if user with that email exist
    let user = await User.findOne({ email }).exec()
    // console.log("USER EXIST", user);
    if (!user) res.status(400).send('User with that email not found')
    // compare password
    user.comparePassword(password, (err, match) => {
      console.log('COMPARE PASSWORD IN LOGIN ERR', err)
      if (!match || err) return res.status(400).send('Wrong password')
      // GENERATE A TOKEN THEN SEND AS RESPONSE TO CLIENT
      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
      })
      return res.json({
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt
        }
      })
    })
  } catch (err) {
    console.log('LOGIN ERROR', err)
    return errorMessage(400, SIgnINFailed, res)
    // res.status(400).send('Signin failed')
  }
}
