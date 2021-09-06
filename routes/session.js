const express = require('express')

const router = express.Router();

router.use('/login', (req, res, next) => {
  res.send(
    '<h1>Login page</h1>'
  )
})

module.exports = router