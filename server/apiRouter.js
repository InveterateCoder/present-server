const router = require('express').Router()
const ObjectId = require('mongodb').ObjectId
const { getDb } = require('./db')
const signinMiddleware = require('./signinMiddleware')
const auth = require('./authenticateMiddleware')

router.get('/all', async (req, res) => {
  try {
    const db = getDb()
    const letters = await db.collection('letters').find({}).sort({ datetime: -1 }).toArray()
    res.json(letters)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/signin', signinMiddleware)

router.post('/create', auth, async (req, res) => {
  try {
    const db = getDb()
    const ret = await db.collection('letters').insertOne(req.body)
    const savedLetter = await db.collection('letters').findOne({ _id: ret.insertedId })
    res.json(savedLetter)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/update', auth, async (req, res) => {
  try {
    const db = getDb()
    const data = { ...req.body }
    const _id = ObjectId(data._id)
    delete data._id
    await db.collection('letters').updateOne({ _id }, { $set: data })
    res.end()
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/delete/:id', auth, async (req, res) => {
  try {
    const db = getDb()
    let _id = ObjectId(req.params.id)
    let ret = await db.collection('letters').deleteOne({ _id })
    if (ret.deletedCount === 1) {
      res.end()
    } else {
      res.sendStatus(500)
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router