import React from 'react';
import Icon from '../icon/Icon';
import { Contact } from '../icon/Selection';
import './NewsLetter.scss';
import { FormattedMessage } from 'react-intl';

const newsLetter = () => {
  return (
    <section className="newsLetter__wrapper">
      <div className="newsLetter__left">
        <h3 className="newsLetter__heading">
          <FormattedMessage id="newsLetter" defaultMessage="news letter" />
        </h3>
        <span>
          <FormattedMessage id="joinUsNews" defaultMessage="join us now to get all news and special offers" />
        </span>
      </div>
      <div className="newsLetter__right">
        <div className="newsLetter__mail">
          <Icon d={Contact.mail} className="newsLetter__icon" />
          <input className="newsLetter__mail-input" placeholder="type your email here" type="text" />
        </div>
        <button className="newsLetter__button">
          <FormattedMessage id="joinus" defaultMessage="join us" />{' '}
        </button>
      </div>
    </section>
  );
};

export default newsLetter;
