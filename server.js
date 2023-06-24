
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()
app.get('/' )
app.use(express.json())
app.use(cors())
// const PORT = 


app.get('/', (req, res) => {
    res.send('Books are the best!')
   })

    app.listen(process.env.PORT)