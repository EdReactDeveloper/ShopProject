import React, { useState } from 'react';
import { login } from '../../store/actions/auth';
import { connect } from 'react-redux';
import './Auth.scss';
import { setAlert } from '../../store/actions/alert';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Login = ({ login, setAlert, history }) => {
	const [formData, setFormData] = useState({
		password: '',
		email: ''
	});

	const { password, email } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async e => {
		e.preventDefault();
		if (email && password) {
			login(email, password, history);
		} else {
			setAlert('password and email are required', 'danger');
		}
	};
	return (
		<div>
			<form onSubmit={onSubmit} className="login__form">
				<label htmlFor="email" className="login__label">
					<FormattedMessage id="email" defaultMessage="email" />
				</label>
				<input className="login__input" type="text" name="email" onChange={e => onChange(e)} />
				<label htmlFor="password" className="login__label">
					<FormattedMessage id="password" defaultMessage="password" />
				</label>
				<input className="login__input" type="text" name="password" onChange={e => onChange(e)} />
				<button className="login__button">
					{' '}
					<FormattedMessage id="login" defaultMessage="login" />
				</button>
			</form>
		</div>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	setAlert: PropTypes.func.isRequired
};

export default connect(null, { login, setAlert })(Login);
