const fs = require('fs')


const data = `la cucaracha, la cucaracha
ya no puede caminar
por que no tiene
porque le faltan
las dos patitas de atrás
una vez la cucaracha
se metió en un hormiguero
y las picaras hormigas
las patitas le comieron
pobrecita cucharacha
anda renga y afligida
caminando a paso lento
escondiendose de dia
la cucaracha, la cucaracha
ya no puede caminar
por que no tiene
porque le faltan
las dos patitas de atras
la señora cucaracha
se ha comprado una bombacha
toda llena de botones
y adornada con hilachas
que bombacha mamarracha
le dijeron los ratones
pero a doña cucaracha
no le importan opiniones
la cucaracha, la cucaracha
ya no puede caminar
por que no tiene
porque le faltan
las dos patitas de atrás.`

// fs.exists('./cancion.txt', (res) => {
//   if (res) {
//     console.log('El archivo ya existe')
//   }else{
//     fs.writeFile('cancion.txt', data, err => {
//       if (err) throw err
//       console.log('Archivo creado correctamente,')
//     })
//   }
// }) 

// fs.copyFile('cancion.txt','files/cancionMovida.txt',(err)=>{
//   if(err){
//     console.log('error al copiar el archivo')
//   }
//   console.log('Archivo copiado corrrectamente')
// })

fs.mkdir('files2/carpeta1',{recursive:true},(err)=>{
  if(err) console.log(err)
})
