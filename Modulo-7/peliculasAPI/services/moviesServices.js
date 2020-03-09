const moviesMoks = require('../utils/mocks/peliculasMocks')
const Movie = require('../models/Movies')
const Alumno = require('../models/Alumno')

class MoviesServices {

  async getAllMoviesService(tags) {
    if(tags){
      const query= {tags:{$in: tags}}
      const movies = await Movie.find(query)
      return movies || []
    }
    const movies = await Movie.find()
    return movies || []
  }

  async getOneMovieService(movieID) {
    const movies = await Movie.findById(movieID)
    return movies || []
  }

  async createMoviesService(movie) {
    const createdMovie = await Movie.create(movie)
    return createdMovie || {}
  }

  async updateMoviesService({movieId,movie}) {
    const updatedMovie = await Movie.findByIdAndUpdate(movieId,movie,{new:true})
    return updatedMovie.id
  }

  async deletedMoviesService(movieId) {
    try{
      const deletedMovie = await Movie.findByIdAndDelete(movieId)
      return deletedMovie.id
    }catch(err){
      console.log(err)
      return {message:'pelicula no encontrada'}
    }
  }

}
class AlumnosServices{

  async createAlumnoService(alumno){
    const createdAlumno = await Alumno.create(alumno)
    return createdAlumno || {}
  }

  async getAllAlumnosService(superpower) {
    if(superpower){
      const query= {superpower:{$in: superpower}}
      const alumno = await Alumno.find(query)
      return alumno || []
    }
    const alumno = await Alumno.find()
    return alumno || []
  }

}
module.exports = {MoviesServices,AlumnosServices}