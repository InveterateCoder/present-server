require('dotenv').config()
const path = require('path')
const express = require('express')
//const cors = require('cors')
const apiRouter = require('./server/apiRouter')
const { connectToDb } = require('./server/db');
console.log('aaaaaaaaaaaadkfjdkfjkdjalsfjalsfjlas kasdjfka jkdfsaj kfdjs')

(async function () {
  await connectToDb()

  const app = express()

  //app.use(cors())
  app.use(express.static(path.resolve(__dirname, 'public')))
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