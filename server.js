
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const booksController = require('./controller/books_controller')
 
//configuration 
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
app.use(express.json())
app.use(cors())
app.use('/books', booksController) 

mongoose.connect(process.env.MONGO_URI, 
    {useNewUrlParser: true, useUnifiedTopology: true}, () => {
        console.log('connected to mongoDB: ', process.env.MONGO_URI)
    })
// const PORT = 

app.get('/', (req, res) => {
    res.send('Books are the best!')
   })

 

app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
  })