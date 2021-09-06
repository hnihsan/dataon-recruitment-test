const path = require('path')

const express = require('express')
const router = express.Router();

const rootDir = require('../utils/path')

router.get(`/rooms`, (req, res, next) => {
  res.render('rooms')
})

router.post(`/rooms`, (req, res, next) => {
  console.log('Create Room')
  res.redirect(`/rooms`)
})

router.use(`/add-rooms`, (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-rooms.html'))
})

router.use((req, res, next) => {
  res.status(404)
    .send('<h1>Page not found</h1>')
})

module.exports = router