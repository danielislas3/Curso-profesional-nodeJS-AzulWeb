const fs = require('fs')

const archivo=fs.createWriteStream('./archivoMamalon.txt')
for(let i=0; i<= 1e6;i++){
  archivo.write('camaron,caramelo,caramelo,camaron.')
}
archivo.end()


// const tam =  fs.stat('./archivoMamalon.txt',(err,status)=>{
//   if(err)console.log(err)
//   console.log(status.size)
// })

