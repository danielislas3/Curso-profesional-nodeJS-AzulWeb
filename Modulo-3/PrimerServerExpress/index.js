const express= require('express')
const path = require('path')
const bodyParser= require('body-parser');

const port=3000
const app = express()

app.use(bodyParser.urlencoded({extended:true}))


app.get('/',(req,res)=>{
  res.send('Hola mundo con express')
})
app.get('/index',(req,res)=>{
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.post('/form',(req,res)=>{
  const {nombre,edad} = req.body
  console.log('Hola '+nombre+ edad)
})

app.get('/cursos/:curso',(req,res)=>{
const {curso}= req.params

switch(curso){

  case('node'): res.send('Bienvenido al curso profesional de node')
  break
  case('react'): res.send('Bienvenido al curso profesional de reactJS')
  break
  case('api'): 
  res.json({nombre:'curso de apis', duracion:'120m'})
  res.end()
  break
  default: res.send('Ups este curso no existe')
}


})
app.listen(port,()=>{
  console.log('Servidor listo y escuchando en el puerto: '+port)
})