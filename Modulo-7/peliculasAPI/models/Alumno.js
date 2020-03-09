const {
  Schema,
  model
} = require('mongoose')

const alumnoSchema = new Schema({

  name: {
    type: String,
    required:true
  },
  lastName: {
    type: String,
    required:true
  },
  age:String,
  contry: {
    type: String,
    required:true
  },
  gender: {
    type: String
  },
  imgProfile: {
    type: String,
    default: 'https://census.gov/volutpat.png'
  },
  superpower: [String]

}, {
  timestamps: true,
  versionKey: false
})

module.exports = model('Alumno', alumnoSchema)