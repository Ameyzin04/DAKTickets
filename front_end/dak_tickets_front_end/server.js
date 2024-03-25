const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const db = require('./db')

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(logger('dev'))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3001

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/', (req, res) => res.send('welcome to our landing page!'))