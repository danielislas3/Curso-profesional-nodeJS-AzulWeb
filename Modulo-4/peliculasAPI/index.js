const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const moviesAPI = require('./routes/movies')

moviesAPI(app)

app.listen(process.env.PORT, () => {
  console.log(` app listening on port ${process.env.PORT} 
  http://localhost:${process.env.PORT}`)
})