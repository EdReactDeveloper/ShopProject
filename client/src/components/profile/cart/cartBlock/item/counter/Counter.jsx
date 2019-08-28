import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { counter } from '../../../../../../store/actions/cart';
import './Counter.scss';

const Counter = ({ cart: { cart }, index, id, counter }) => {
  const {quantity} = cart[index];

  const inputHandler = e => {
    counter(Number(e.target.value), id);
  };
  const countHandler = sign => {
    counter(sign === 'up' ? quantity + 1 : quantity - 1, id);
  };

  return (
    <div className="cart__item_quantity">
      <div className="counter__wrapper">
        <button type="button" className="counter__btn" disabled={quantity < 2} onClick={() => countHandler('down')}>
          -
        </button>
        <form className="counter__form">
          <input type="number" value={quantity} onChange={e => inputHandler(e)} className="counter__display" />
        </form>
        <button type="button" className="counter__btn" onClick={() => countHandler('up')}>
          +
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

Counter.propTypes = {
  cart: PropTypes.shape(
    {
      color: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      cart: PropTypes.arrayOf(PropTypes.shape(
        {
          color: PropTypes.string.isRequired,
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
              rating: PropTypes.number.isRequired
            }
          )
        })
      )
    }
  ).isRequired,
  index: PropTypes.number.isRequired,
  counter: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default connect(mapStateToProps, { counter })(Counter);
