const express = require('express')
const {getAllMovies,getOneMovie,createMovie,updateMovie,deleteMovie} = require('../controllers/moviesController')

function moviesAPI(app) {
  //creo mi router
  const router = express.Router()
  //asigno la ruta raiz 
  app.use('/api/movies', router)
  /****CRUD*****/
  /*****Read****/
  router.get('/', getAllMovies)
  router.get('/:movieId', getOneMovie)

  /*****Create****/
  router.post('/', createMovie)

  /*****Update****/
  router.put('/:movieId', updateMovie)

  /*****Delet****/
  router.delete('/:movieId', deleteMovie)
}
module.exports = moviesAPI