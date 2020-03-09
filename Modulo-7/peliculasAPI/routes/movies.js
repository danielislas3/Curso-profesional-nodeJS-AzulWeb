const express = require('express')
const {
  getAllMovies,
  getOneMovie,
  createMovie,
  updateMovie,
  deleteMovie
} = require('../controllers/moviesController')
const {
  createAlumno,
  getAllAlumnos
} = require('../controllers/alumnosController')

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

function alumnosAPI(app) {
  const router = express.Router()
  app.use('/api/alumnos', router)
  /**Alumnos***/
  router.get('/', getAllAlumnos)
  router.post('/', createAlumno)
}

module.exports = {
  moviesAPI,
  alumnosAPI
}