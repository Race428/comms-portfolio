const express = require('express')
require('dotenv').config()

const app = express()

const massive = require('massive')

const session = require('express-session')

const { SERVER_PORT, SESSION_SECRET } = process.env


app.use(express.static(`${__dirname}/../build`));

app.use(express.json())

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
)



app.listen(SERVER_PORT, () => {
  console.log(`Listening on Server ${SERVER_PORT}`)
})
