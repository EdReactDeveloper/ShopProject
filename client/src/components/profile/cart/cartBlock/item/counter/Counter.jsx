import React from 'react';
import './Counter.scss';
import { connect } from 'react-redux';
import { counter } from '../../../../../../store/actions/cart';
import PropTypes from 'prop-types';

const Counter = ({ cart: { cart }, index, id, counter }) => {
	const quantity = cart[index].quantity;

	const inputHandler = e => {
		counter(Number(e.target.value), id);
	};
	const countHandler = sign => {
		counter(sign === 'up' ? quantity + 1 : quantity - 1, id);
	};

	return (
		<div className="cart__item_quantity">
			<div className="counter__wrapper">
				<button className="counter__btn" disabled={quantity < 2} onClick={() => countHandler('down')}>
					-
				</button>
				<input type="number" value={quantity} onChange={e => inputHandler(e)} className="counter__display" />
				<button className="counter__btn" onClick={() => countHandler('up')}>
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
	cart: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	counter: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired
};

export default connect(mapStateToProps, { counter })(Counter);
