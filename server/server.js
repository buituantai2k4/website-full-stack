const express = require('express')
require('dotenv').config()  
const dbConnect = require('./config/dbconnect')


const app = express()
const port = process.env.PORT || 8888
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
dbConnect()

app.use('/', (req, res) => {
    res.send('SEVER ON')
})

app.listen(port, () => {
    console.log('Sever running on the port: ' +port)
})