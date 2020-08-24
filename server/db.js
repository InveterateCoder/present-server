const { MongoClient } = require('mongodb')

var db

async function connectToDb() {
  const url = process.env.DB_URL
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })
  await client.connect()
  db = client.db()
}

function getDb() {
  return db
}

module.exports = {
  connectToDb,
  getDb
}