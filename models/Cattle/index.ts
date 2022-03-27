export {}
const mongoose = require('mongoose')

const CattleSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  nickname: {
    type: String,
  },
  date_of_birth: {
    type: String,
  },
  sire: {
    type: String,
  },
  dam: {
    type: String,
  },
})

module.exports = mongoose.model('Cattle', CattleSchema)
