import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import setAlert from '../../store/actions/alert';
import { login } from '../../store/actions/auth';
import './Auth.scss';

const Login = ({ login, setAlert, history }) => {
  const [formData, setFormData] = useState({
    password: '',
    email: ''
  });

  const { password, email } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password, history);
    } else {
      setAlert('password and email are required', 'danger');
    }
  };
  return (
    <form onSubmit={onSubmit} className="login__form">
      <label htmlFor="email" className="login__label">
        <span className="login__lable__name"> 
          <FormattedMessage id="email" defaultMessage="email" /> 
        </span> 
        <input
          className="login__input"
          type="text"
          name="email"
          onChange={e => onChange(e)}
        />
      </label>
      <label htmlFor="password" className="login__label">
        <span className="login__lable__name">
          <FormattedMessage id="password" defaultMessage="password" />
        </span>        
        <input
          type="password"
          className="login__input"
          name="password"
          onChange={e => onChange(e)}
        />
      </label>
      <button type="submit" className="login__button">
        <FormattedMessage id="login" defaultMessage="login" />
      </button>
    </form>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired
};

export default connect(
  null,
  { login, setAlert }
)(Login);
