// let padres=false

// const carnitaAsada = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     if(padres){
//       resolve('si se armo :D')
//     }else{
//       reject('no se armo D:')
//     }  
//   },3000)
// })

// async function hacerCarnita(){
//   let result =  await carnitaAsada
//   console.log(result)
// }
// hacerCarnita()
// console.log('Esperando...')

const consultaDb = new Promise((resolve, reject) => {

  const peliculas = [
    {name:'buscando a nemo'},
    {name:'buscando a nemo 2'},
    {name:'buscando a nemo 3'}
  ]

  setTimeout(() => {
    if (peliculas.length > 0) {
      resolve(peliculas)
    } else {
      reject('no hay pelicilas')
    }
  }, 1000)
})


async function consultandoALaBaseDeDatos(){
  try{
    let result = await consultaDb
    result.forEach(e => {
      console.log(e.name)
    })
  }catch(err){
    console.log(err)
  }
}

consultandoALaBaseDeDatos()
// consultaDb.then((arr)=>{
//   arr.forEach(peli => {
//     console.log(peli.name)
//   });
// }).catch(console.log)

