import React from 'react';
import '../styles/Counter.scss';
import { connect } from 'react-redux';
import { counter } from '../../../actions/cart';

const Counter = ({ cart:{cart, loading}, index, id, counter }) => {
	const quantity = cart[index].quantity


	const inputHandler = e => {
		counter(Number(e.target.value), id);
	};
	const countHandler = sign => {
		counter(sign === 'up' ? quantity + 1 : quantity - 1, id);
	};

	return (
		<div className="counter__wrapper">
			<button className="counter__btn" disabled={quantity < 2} onClick={() => countHandler('down')}>
				-
			</button>
			<input type="number" value={quantity} onChange={e => inputHandler(e)} className="counter__display" />
			<button className="counter__btn" onClick={() => countHandler('up')}>
				+
			</button>
		</div>
	);
};

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps, { counter })(Counter);
