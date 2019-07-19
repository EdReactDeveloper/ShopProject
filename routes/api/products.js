const express = require('express')
const router = express.Router()
const Product = require('../../models/product'); 

router.get('/get', async(req, res, next)=>{
  try {
    const products = await Product.find()
    return res.json(products)
  } catch (error) {
    res.state(400).json(error)
  }
})

router.get('/:id', async(req, res, next)=>{
  try {
    const product = await Product.findById(req.params.id)
    return res.json(product)
  } catch (error) {
    res.state(400).json(error)
  }
})

module.exports = router