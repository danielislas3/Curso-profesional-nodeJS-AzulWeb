const {AlumnosServices} = require('../services/moviesServices')

const alumnosServices= new AlumnosServices()

const createAlumno = async (req, res, next) => {
  const {
    body: alumno
  } = req
  const createdAlumno = await alumnosServices.createAlumnoService( alumno)
  try {
    res.status(201).json({
      data: createdAlumno,
      message: 'done'
    })
  } catch (err) {
    next(err)
  }
}
const getAllAlumnos = async (req, res, next) => {
  const {superpower} = req.query
  console.log(req.query)
  try {
    const alumnos = await alumnosServices.getAllAlumnosService(superpower)
    res.status(200).json({
      data: alumnos,
      message: 'todos los Alumnos que terminaropn el curos de Node JS en Azul School =D'
    })
  } catch (err) {
    next(err)
  }
}

module.exports= {createAlumno,getAllAlumnos}