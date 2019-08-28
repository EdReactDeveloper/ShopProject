import React from 'react';
import { FormattedMessage } from 'react-intl';
import Logo from '../../logo/Logo';
import './LogoBlock.scss';

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
