const express = require('express')
const moviesMoks= require('./utils/mocks/peliculasMocks')

function moviesAPI(app){
 const router = express.Router()
  app.use('/api/movies',router)

  router.get('/',async (req,res,next)=>{
    try{
      const movies = await Promise.resolve(moviesMoks)
      res.status(200).json({
      data:movies,
      message:'todas las peliculas'
      })
    }catch(err){
      next(err)
    }
  })
}

module.exports=moviesAPI
