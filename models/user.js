const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},

	cart: {
		items: [
			{
				productId: {
					type: Schema.Types.ObjectId,
					ref: 'Product',
					required: true
				},
				quantity: { type: Number, required: true },
				total: {type: Number, required: true}, 
				color: { type: String, required: true },
				size: { type: String, required: true }
			}
		]
	}
});

User.methods.addToCart = function(product, color, size, price) {
	const productIndex = this.cart.items.findIndex(item => item.productId.toString() === product._id.toString());
	let newQuantity = 1;
	const updatedCartItems = [...this.cart.items];
	if (productIndex >= 0) {
		newQuantity = updatedCartItems[productIndex].quantity + 1;
		updatedCartItems[productIndex].quantity = newQuantity;
	} else {
		updatedCartItems.push({ productId: product._id, quantity: newQuantity, color, size, total: newQuantity * price });
	}

	const updatedCart = {
		items: updatedCartItems
	};
	this.cart = updatedCart;
	return this.save();
};

User.methods.removeFromCart = function(id) {
	const updatedCart = this.cart.items.filter(item => item.productId._id.toString() !== id.toString());
	this.cart.items = updatedCart;
	return this.save();
};

User.methods.cartClear = function(){
	this.cart = {item: []}
	this.save()
}
module.exports = mongoose.model('User', User);
