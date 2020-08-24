require('dotenv').config()
const path = require('path')
const express = require('express')
const cors = require('cors')
const apiRouter = require('./server/apiRouter')
const { connectToDb } = require('./server/db');

(async function () {
  const PORT = process.env.PORT || 7000
  await connectToDb()

  const app = express()

  app.use(cors())
  app.use(express.static(path.resolve(__dirname, 'client', 'dist')))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/api', apiRouter)
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  })

  app.listen(PORT)
})()