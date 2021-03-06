import express from 'express'
import { readdirSync } from 'fs'
import cors from 'cors'
import mongoose from 'mongoose'

require('dotenv').config()

const morgan = require('morgan')
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('connected'))
  .catch(err => console.log('Database: ', err))

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// route middleware
readdirSync('./routes').map(r => app.use('/api', require(`./routes/${r}`)))

app.listen(process.env.PORT || 8000, () =>
  console.log(`Server is running on port 8000`)
)
