import React from 'react';
import Logo from '../../logo/Logo';
import './LogoBlock.scss';
import { FormattedMessage } from 'react-intl';

const FooterLogo = () => {
  return (
    <section className="logo__wrapper">
      <Logo />
      <span>
        shopy &copy; 2019.
        <FormattedMessage id="allrigthsreserved" defaultMessage="all rights reserved" />
      </span>
    </section>
  );
};

export default FooterLogo;
