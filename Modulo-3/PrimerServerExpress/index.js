const express= require('express')
const port=3000
const app = express()

app.get('/',(req,res)=>{
  res.send('Hola mundo con express')
})


app.listen(port,()=>{
  console.log('Servidor listo y escuchando en el puerto: '+port)
})