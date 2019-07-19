const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema({
  user: {
    email: {
      type: String, 
      required: true
    },
    userId:{
      type: Schema.Types.ObjectId, 
      required: true, 
      ref: 'User'
    }
  }, 
products: [
  {
    price: {type: Number, required: true},
    title: {type: String, required: true}, 
    total: {type: Number, required: true},
    productId: {type: Schema.Types.ObjectId, required: true},
    quantity: {type: Number, required: true},
    color: {type: String, required: true}, 
    size: {type: String, required: true}
  }
]
})

module.exports = mongoose.model('Order', Order)