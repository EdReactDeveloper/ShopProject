import React, { useState } from 'react';
import { register } from '../../store/actions/auth';
import { setAlert } from '../../store/actions/alert';
import { connect } from 'react-redux';
import './Auth.scss';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Register = ({ register, setAlert, history }) => {
	const [formData, setFormData] = useState({
		password: '',
		email: '',
		password2: ''
	});

	const { password, email, password2 } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async e => {
		e.preventDefault();
		if (email && password && password2) {
			if (password === password2) {
				register(email, password, history);
			} else {
				setAlert('password and email are required', 'danger');
			}
		}
	};
	return (
		<form onSubmit={onSubmit} className="login__form">
			<label htmlFor="email" className="login__label">
				<FormattedMessage id="email" defaultMessage="email" />
			</label>
			<input className="login__input" type="text" name="email" onChange={e => onChange(e)} />
			<label htmlFor="password" className="login__label">
				{' '}
				<FormattedMessage id="password" defaultMessage="password" />
			</label>
			<input className="login__input" type="text" name="password" onChange={e => onChange(e)} />
			<label htmlFor="password" className="login__label">
				<FormattedMessage id="re-enter.password" defaultMessage="re-enter your password" />
			</label>
			<input className="login__input" type="text" name="password2" onChange={e => onChange(e)} />
			<button className="login__button">
				<FormattedMessage id="confirm" defaultMessage="confirm" />
			</button>
		</form>
	);
};

Register.propTypes = {
	register: PropTypes.func.isRequired,
	setAlert: PropTypes.func.isRequired
};

export default connect(null, { register, setAlert })(Register);
