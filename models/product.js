const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
  heading: {
    type: String, 
    required: true
  },
  subheading: {
    type: String, 
    required: true
  },
  sizes: [Array],
  colors: [Array],
  images: [Array],
  price: {
    type: Number, 
    required: true
  },
  category: {
    type: String, 
    required: true
  }, 
  description: {
    type: String, 
    required: true
  },
  rating: {
    type: Number, 
    required: true
  }
})

module.exports = mongoose.model('Product', Product)