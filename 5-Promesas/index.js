// let padres=true

// const carnitaAsada = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     if(padres){
//       resolve('si se armo :D')
//     }else{
//       reject('no se armo D:')
//     }  
//   },3000)
// })

// carnitaAsada.then((result)=>{
//   console.log(result)
//   console.log('comprar carnita')
// }).catch((err)=>{
//   console.log(err)
// })

// console.log('Esperando...')

const consultaDb = new Promise((resolve, reject) => {

  const peliculas = [
  ]

  setTimeout(() => {
    if (peliculas.length > 0) {
      resolve(peliculas)
    } else {
      reject('no hay pelicilas')
    }
  }, 1000)
})

consultaDb.then((arr)=>{
  arr.forEach(peli => {
    console.log(peli)
  });
}).catch(console.log)

