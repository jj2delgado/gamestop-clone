require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

app.use(
    session({
        secret: CONNECTION_STRING,
        saveUninitialized: true,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    })
)

// massive(CONNECTION_STRING).then(db => {
//     app.listen(SERVER_PORT, () => console.log('Live on port ', SERVER_PORT))
//     app.set('db', db)
// })
// app.get('/api/test', (req, res) => {
//     res.sendStatus(209)
// })

app.listen(SERVER_PORT, () => console.log('Live on port ', SERVER_PORT))