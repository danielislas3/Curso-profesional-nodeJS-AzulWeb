const moviesMoks = require('../utils/mocks/peliculasMocks')
const Movie = require('../models/Movies')

class MoviesServices {

  async getAllMoviesService() {
    const movies = await Movie.find()
    return movies || []
  }

  async getMoviesService({tags}) {
    const query= tags && {tags: {$in:tags}} 
    
    const movies = await Movie.find(query)
    return movies || []
  }

  async getOneMovieService(movieID) {
    const movies = await Movie.findById(movieID)
    return movies || []
  }

  async createMoviesService(movie) {
    console.log(movie)
    const createdMovie = await Movie.create(movie)
    return createdMovie || {}
  }

  async updateMoviesService(movieId,movie) {
    const updatedMovie = await Movie.findByIdAndUpdate(movieId,movie,{new:true})
    return updatedMovie.id
  }

  async deletedMoviesService(movieId) {
    const deletedMovie = await Movie.findByIdAndDelete(movieId)
    return deletedMovie.id
  }

}

module.exports = MoviesServices