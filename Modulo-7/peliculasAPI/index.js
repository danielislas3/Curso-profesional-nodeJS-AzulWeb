const express = require('express')
const bodyParser= require('body-parser')
const dotenv = require('dotenv').config()
const {moviesAPI,alumnosAPI} = require('./routes/movies')
const mongoose = require('mongoose');
const cors = require('cors')
const url = process.env.DB
const {logError,handleError}=require('./middlewares/errorMiddleware')

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(res=>{
  console.log('conectado a la base de datos: '+res.connections[0].name)
}).catch(err=>{
  console.log("error de coneccion en la base:"+err);
})

moviesAPI(app)
alumnosAPI(app)
app.use(logError)
app.use(handleError)

app.listen(process.env.PORT, () => {
  console.log(` app listening on port ${process.env.PORT} 
  http://localhost:${process.env.PORT}`)
})