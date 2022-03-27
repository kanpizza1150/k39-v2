require('dotenv').config()
import express, { Request, Response, Application } from 'express'
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app: Application = express()

const PORT = process.env.PORT || 8000
const mongodbUrl = process.env.MONGODB_URL
console.log('+++++++++++++++++++++++++++++mongodbUrl', mongodbUrl)
mongoose.connect(mongodbUrl, { useNewUrlParser: true })
// const database = mongoose.connection
// database.on('error', (error: Error) => {
//   console.error('[DB] Error:', error)
// })

// database.once('connected', () => {
//   console.log('[DB]: Database Connected')
// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', routes)
app.use(express.static(path.join(__dirname, 'client', 'build')))
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`)
})
