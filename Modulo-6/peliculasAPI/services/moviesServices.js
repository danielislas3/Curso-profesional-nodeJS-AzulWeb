const moviesMoks = require('../utils/mocks/peliculasMocks')

class MoviesServices {

  async getMoviesService() {
    const movies = await Promise.resolve(moviesMoks)
    return movies || []
  }

  async getOneMovieService(movieID) {
    const movies = await Promise.resolve(moviesMoks)
    return movies[0] || []
  }

  async createMoviesService() {
    const createdMovie = await Promise.resolve(moviesMoks.movies)
    return createdMovie[0] || {}
  }

  async updateMoviesService() {
    const updatedMovie = await Promise.resolve(moviesMoks.movies)
    return updatedMovie.id
  }

  async deletedMoviesService() {
    const deletedMovie = await Promise.resolve(moviesMoks.movies)
    return deletedMovie.id
  }

}

module.exports = MoviesServices