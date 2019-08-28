import PropTypes from 'prop-types';

const inCart = (product, cart) => {
  
  const products = cart.map(item => item.productId._id);
  return products.includes(product._id);
};

inCart.propTypes = {
  product: PropTypes.shape(
    {
      colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
      sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
      category: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      subheading: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired
    }
  ).isRequired,
  cart: PropTypes.arrayOf(PropTypes.shape(
    {
      color: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,      
      productId: PropTypes.shape(
        {
          colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
          sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
          category: PropTypes.string.isRequired,
          heading: PropTypes.string.isRequired,
          subheading: PropTypes.string.isRequired,
          _id: PropTypes.string.isRequired,
          images: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
          price: PropTypes.number.isRequired,
          rating: PropTypes.number.isRequired,
          description: PropTypes.string.isRequired
        }
      ).isRequired,
    }
  ))
};

export default inCart