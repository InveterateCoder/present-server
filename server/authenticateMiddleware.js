const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authHeader = req.get('authorization')
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) return res.sendStatus(401)
  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err || decoded.it !== 'LOVE') {
      res.sendStatus(401)
    } else {
      next()
    }
  })
}