require('dotenv').config()


const port = 3000
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const app = express()

/*
    Database
*/
mongoose.connect(
    process.env.MONGO_URL, 
    {
    useNewUrlParser: true
})

app.use(cors()) // aqui tem que usar isso pra deixar acessar a api
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(morgan("dev"))
app.use(
    '/files', 
    express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))

app.use(require('./routes'))

app.listen(port, console.log(`BACKEND is running on ${port}`))