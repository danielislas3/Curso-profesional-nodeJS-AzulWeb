const {
  Schema,
  model
} = require('mongoose')

const movieSchema = new Schema({

  title: {
    type: String,

  },
  year: {
    type: String,

  },
  cover: {
    type: String,
    default: 'http://dummyimage.com/184x223.jpg/ff4444/ffffff'
  },
  duration: {
    type: String
  },
  contentRating: {
    type: String
  },
  source: {
    type: String,
    default: 'https://census.gov/volutpat.png'
  },
  tags: [String]

}, {
  timestamps: true,
  versionKey: false
})

module.exports = model('Movie', movieSchema)