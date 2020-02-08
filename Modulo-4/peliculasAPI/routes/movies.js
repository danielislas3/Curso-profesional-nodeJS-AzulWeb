const express = require('express')
const moviesMoks = require('./utils/mocks/peliculasMocks')

function moviesAPI(app) {
  /*CRUD*/

  /*****Read****/
  const router = express.Router()
  app.use('/api/movies', router)

  router.get('/', async (req, res, next) => {
    try {
      const movies = await Promise.resolve(moviesMoks)
      res.status(200).json({
        data: movies,
        message: 'todas las peliculas'
      })
    } catch (err) {
      next(err)
    }
  })
  /*****Create****/
  router.post('/', async (req, res, next) => {
    const createdMovie = await Promise.resolve(moviesMoks)
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
    const updatedMovie = await Promise.resolve(moviesMoks)
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
  const deletedMovie = await Promise.resolve(moviesMoks)
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