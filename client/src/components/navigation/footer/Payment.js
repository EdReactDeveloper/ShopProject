import React from "react";
import cards from "../../../assests/payment.png";
import './styles/Payment.scss'; 
import {FormattedMessage} from 'react-intl'; 

const Payment = () => {
  return (
    <div className="payment">
      <h3 className="payment__heading">
      <FormattedMessage id="paymentMethods" defaultMessage= "Payment Methods"/>
        
       </h3>
      <img src={cards} alt="is missing" className="payment__image" />
    </div>
  );
};

export default Payment;
