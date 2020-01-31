const express= require('express')
const path = require('path')
const bodyParser= require('body-parser')

const port=3000
const app = express()

app.use(bodyParser.urlencoded({ extended:true}))


app.get('/',(req,res)=>{
  res.send('Hola mundo con express')
})
app.get('/index',(req,res)=>{
  res.sendFile(path.join(__dirname+'/index.html'))
})
app.post('/form',(req,res)=>{
  console.log(req.body.nombre)
  res.json({nombre:req.body.nombre})
  res.end()
})
app.get('/cursos/:nombre',(req,res)=>{
  console.log(req.params.nombre)

})


app.listen(port,()=>{
  console.log('Servidor listo y escuchando en el puerto: '+port)
})