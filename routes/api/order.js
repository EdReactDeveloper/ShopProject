const express = require('express');
const router = express.Router();
const Order = require('../../models/order');


router.get('/get', async(req, res, next) => {
  try {
    const orders = await Order.find({'user.userId': req.user._id}).select('-user')
    res.json(orders)
  } catch (error) {
    
  }
})


router.post('/post', async (req, res, next) => {
	const { cart } = req.body;
	const products = cart.map(item => {
		return {
      productId: item.productId._id,
			quantity: item.quantity,
			color: item.color,
			size: item.size,
			total: item.total, 
			price: item.productId.price,
			title: item.productId.heading,
		};
  });
	const order = new Order({
		user: {
			email: req.user.email,
			userId: req.user
		},
		products: products
	});
  await order.save();
  return res.json(order)
});

module.exports = router;
