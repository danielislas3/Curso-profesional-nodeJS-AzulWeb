const {Duplex,Transform}= require('stream')

// const duplexStream = new Duplex ({
//   write(pedacitos,encoding,callback){
//     console.log(pedacitos.toString())
//     callback()
//   },

//   read(size){
//     if(this.caracter>90){
//       this.push(null)
//       return
//     }
//     this.push(String.fromCharCode(this.caracter++))
//   }

// })

// duplexStream.caracter=65
// process.stdin.pipe(duplexStream).pipe(process.stdout)

const transformStream = new Transform({
  transform(pedacito,encoding,callback){
    this.push(pedacito.toString().toUpperCase())
    callback()
  }
})

process.stdin.pipe(transformStream).pipe(process.stdout)