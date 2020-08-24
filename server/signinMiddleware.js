const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
  if (req.body.password === process.env.PASSWORD) {
    const token = jwt.sign({ it: 'LOVE' }, process.env.SECRET, { expiresIn: '2 days' })
    res.json(token)
  } else {
    res.sendStatus(400)
  }
}