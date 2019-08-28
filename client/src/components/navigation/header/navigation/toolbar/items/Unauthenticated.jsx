import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './Items.scss';

const UnAuthenticated = () => {
  return (
    <>
      <button type="button" className="toolbar__item">
        <Link to="/login">
          <FormattedMessage id="login" defaultMessage="login" />
        </Link>
      </button>
      <button type="button" className="toolbar__item">
        <Link to="/register">
          <FormattedMessage id="register" defaultMessage="register" />
        </Link>
      </button>
    </>
  );
};

export default UnAuthenticated;
