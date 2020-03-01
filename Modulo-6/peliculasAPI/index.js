const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const moviesAPI = require('./routes/movies')
const mongoose = require('mongoose');

const url = process.env.DB

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });

kitty.save().then(() => console.log('meow'));

app.listen(process.env.PORT, () => {
  console.log(` app listening on port ${process.env.PORT} 
  http://localhost:${process.env.PORT}`)
})