const MoviesServices = require('../services/moviesServices')

const moviesServices = new MoviesServices()


const getAllMovies = async (req, res, next) => {
  try {
    const tags = req.query
    const movies = await moviesServices.getMoviesService({
      tags
    })
    res.status(200).json({
      data: movies,
      message: 'todas las peliculas'
    })
  } catch (err) {
    next(err)
  }
}

const getOneMovie = async (req, res, next) => {
  const {movieId} = req.params
  try {
    const movie = await moviesServices.getOneMovieService({movieId})
    res.status(200).json({
      data: movie.movies[0],
      message: 'todas las peliculas'
    })
  } catch (err) {
    next(err)
  }
}



module.exports={
  getAllMovies,
  getOneMovie
}