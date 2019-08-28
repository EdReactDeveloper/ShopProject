import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../store/actions/auth';
import setAlert from '../../store/actions/alert';
import './Auth.scss';

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
        <input className="login__input" type="password" name="password" onChange={e => onChange(e)} />
      </label>
      <label htmlFor="password" className="login__label">
        <span className="login__lable__name">
          <FormattedMessage id="re-enter.password" defaultMessage="re-enter your password" />
        </span>
        <input
          className="login__input"
          type="password"
          name="password2"
          onChange={e => onChange(e)}
        />
      </label>
      <button className="login__button" type="submit">
        <FormattedMessage id="confirm" defaultMessage="confirm" />
      </button>
    </form>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired

};

export default connect(null, { register, setAlert })(Register);
