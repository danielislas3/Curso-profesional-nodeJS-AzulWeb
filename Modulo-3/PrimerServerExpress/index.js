const express= require('express')
const path = require('path')
const port=3000
const app = express()

app.get('/',(req,res)=>{
  res.send('Hola mundo con express')
})
app.get('/index',(req,res)=>{
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(port,()=>{
  console.log('Servidor listo y escuchando en el puerto: '+port)
})