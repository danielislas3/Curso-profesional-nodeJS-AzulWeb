const os = require ('os')
const fs = require ('fs')
const {suma,resta}= require('../Modulos/index')
// let usuario = (os.userInfo().username)

// if(usuario==='daniel'){
//   console.log(suma(5,6))
// }else{
//   console.log(resta(8-3))
// }

//console.log(os.cpus())
//console.log(os.homedir())
//console.log(os.hostname())
//console.log(((((os.freemem())/1024)/1024)/1024))

//leer directios

// try{
//   const archivos = fs.readdirSync('')
// console.log(archivos)
// }catch(err){
//   console.log(err)
// }

// console.log('siguiente funcion...')

// const archivos = fs.readdirSync('')
// console.log(archivos)
// console.log('siguiente funcion...')

// const archivos = fs.readdir('./',(err,files)=>{
//   if(err)return
//   console.log(files)
// })


//leer archivo

// fs.readFile('./npm-debug.log','utf8',(err,contenido)=>{
//   if(err)throw err
//   console.log(contenido)
// })

console.log(fs.readFileSync('./npm-debug.log','utf-8'))