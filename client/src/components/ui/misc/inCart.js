export const inCart = (product, cart) => {
  const products = cart.map(item => item.productId._id)
  return products.includes(product._id)
}




