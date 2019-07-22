import PropTypes from 'prop-types'; 

export const inCart = (product, cart) => {
  const products = cart.map(item => item.productId._id)
  return products.includes(product._id)
}

inCart.propTypes={
  product: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
}



