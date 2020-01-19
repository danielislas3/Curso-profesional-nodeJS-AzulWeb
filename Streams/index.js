const fs = require('fs')
const server = require('http').createServer()
//136000136 caracteres
//136000136

//servidor sin streams
// server.on('request', (req, res) => {
//   const archvo = fs.readFile('./archivoMamalon.txt', (err,data) => {
//     if (err) {
//       console.log(err)
//     }
//       res.end(data)
//   })

// })

// server.listen(3000,()=>{
//   console.log("server en puerto 3000")
// })
//  //console.log(archvo.length)

/*Cómo funciona internamente un stream*/

// const archivo = fs.createReadStream('./archivoMamalon.txt','utf-8')
// let data=''

// archivo.once('data',()=>{
//   console.log('Aqui inicia el stream')
// })

// archivo.on('data',(pedacitos)=>{
//   console.log('tamaño de los pedacitos:'+pedacitos.length)
//   data=data+pedacitos
// })

// archivo.on('',()=>{
//   console.log('finalizacioendn del stream')
//   console.log('tamaño total de la data'+data.length)
// })

//Servidor con streams

server.on('request', (req, res) => {
  const archivo = fs.createReadStream('./archivoMamalon.txt','utf-8')
  archivo.pipe(res);

})

server.listen(3000,()=>{
  console.log("server en puerto 3000")
})
 //console.log(archvo.length)

