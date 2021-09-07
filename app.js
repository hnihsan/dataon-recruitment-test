require('dotenv').config()
const path = require('path');

const express = require('express')
const bodyParser = require('body-parser')

const sequelize = require('./utils/database')
const models = require('./models/index')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

const sessionRoutes = require('./routes/session')
const usersRoutes = require('./routes/users')
const roomsRoutes = require('./routes/rooms')
const schedulesRoutes = require('./routes/schedules')
const homeRoutes = require('./routes/home')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/auth', sessionRoutes)
app.use('/users', usersRoutes)
app.use('/rooms', roomsRoutes)
app.use('/schedules', schedulesRoutes)
app.use(homeRoutes)

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    app.listen(process.env.PORT || 5000);
  })
  .catch(err => {
    console.log(err);
  });