require('dotenv').config()
const path = require('path')
const express = require('express')
const cors = require('cors')
const apiRouter = require('./server/apiRouter')
const { connectToDb } = require('./server/db');

(async function () {
  await connectToDb()

  const app = express()
  if (process.env.NODE_ENV !== 'production') {
    app.use(cors())
    app.use(express.static('public'))
  } else {
    console.log('production')
    app.use(express.static('public', {
      etag: true,
      lastModified: true,
      setHeaders: (res, path) => {
        res.setHeader('Cache-Control', 'public, max-age=31536000')
      }
    }))
  }
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/api', apiRouter)
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  })

  const server = app.listen(process.env.PORT || 5000, function () {
    const port = server.address().port
    console.log("Express is working on port " + port)
  })
})()