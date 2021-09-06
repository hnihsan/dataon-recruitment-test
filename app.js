const path = require('path');

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

const adminRoutes = require('./routes/admin')
const sessionRoutes = require('./routes/session')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use(sessionRoutes)
app.use('/admin', adminRoutes)


app.listen(3000)