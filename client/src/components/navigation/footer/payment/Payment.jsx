import React from 'react';
import cards from '../../../../assests/payment.png';
import './Payment.scss';
import { FormattedMessage } from 'react-intl';

const Payment = () => {
  return (
    <section className="payment">
      <h3 className="payment__heading">
        <FormattedMessage id="paymentMethods" defaultMessage="Payment Methods" />
      </h3>
      <img src={cards} alt="payment methods" className="payment__image" />
    </section>
  );
};

export default Payment;
