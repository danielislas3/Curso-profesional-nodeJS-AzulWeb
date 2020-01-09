const http = require('http')

http.createServer((req,res)=>{

  console.log('Esta es la peticion',req.url)
  if(req.url=='/perfil'){
    res.write('Hola mundo')
    res.end()
  }else{
    res.write('Error 404')
    res.end()
  }
}).listen(3000)

console.log('Sevidor esta prendido y esta escuchando en el puerto 3000')
