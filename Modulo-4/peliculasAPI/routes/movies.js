const express = require('express')
const {getAllMovies,getOneMovie} = require('../controllers/moviesController')
function moviesAPI(app) {
  /*CRUD*/
  /*****Read****/
  const router = express.Router()
  app.use('/api/movies', router)

  router.get('/',getAllMovies)
  router.get('/:movieId', getOneMovie)
  
  /*****Create****/
  router.post('/', async (req, res, next) => {
    const {body:movie}=req
    const createdMovie = await moviesServices.createMoviesService({movie})
    try {
      res.status(201).json({
        data: createdMovie.movies[0].id,
        message: 'done'
      })
    } catch (err) {
      next(err)
    }
  })
 /*****Update****/
  router.put('/:movieId',async (req, res, next) => {
    const {body:movie}=req
    const {movieId} = req.params
    const updatedMovie = await moviesServices.updateMoviesService({movieId,movie})
    try {
      res.status(200).json({
        data: updatedMovie.movies[0].id,
        message: 'updated movie'
      })
    } catch (err) {
      next(err)
    }
  })
 /*****Delet****/
 router.delete('/:movieId', async (req, res, next) => {
  const {movieId} = req.params
  const deletedMovie = await moviesServices.deletedMoviesService({movieId})
  try {
    res.status(200).json({
      data: deletedMovie.movies[0].id,
      message: 'deleted movie'
    })
  } catch (err) {
    next(err)
  }
})

  

}

module.exports = moviesAPI

