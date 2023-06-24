require('dotenv').config()
const express = require('express')
const app = express()

app.get('/' )
app.use(express.json())

// const PORT = 


app.get('/', (req, res) => {
    res.send('Books are the best!')
   })

    app.listen(process.env.PORT)