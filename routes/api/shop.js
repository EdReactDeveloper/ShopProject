const express = require('express');
const router = express.Router();
const Product = require('../../models/product');

router.post('/toCart', async (req, res, next) => {
	const { id, size, color, price } = req.body;
	try {
		const product = await Product.findById(id);
		if (!product) {
			return res.status(404).json({ msg: 'no product found' });
		}
		const user = await req.user.addToCart(product, color, size, price);
		return res.json(user.cart.items);
	} catch (error) {
		res.status(404).json(error);
	}
});

router.get('/cart', async (req, res, next) => {
	try {
		const user = await req.user.populate('cart.items.productId').execPopulate();
		const products = user.cart.items;
		return res.json(products);
	} catch (error) {
		res.status(404).json(error);
	}
});

router.post('/remove', async (req, res, next) => {
	const { id } = req.body;
	try {
		await req.user.removeFromCart(id);
		res.json({ msg: 'item removed' });
	} catch (error) {
		res.status(404).json(error);
	}
});

module.exports = router;
