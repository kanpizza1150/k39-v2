export {}
const mongoose = require('mongoose')
const SemenSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  doses: [
    {
      leave_at: { type: String },
      price: { type: Number },
      stock: { type: Number },
    },
  ],
})

module.exports = mongoose.model('Semen', SemenSchema)
