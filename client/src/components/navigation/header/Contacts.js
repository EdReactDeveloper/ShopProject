import React from 'react';
import Icon from "../../ui/icon/Icon";
import { Contact } from "../../ui/icon/Selection";
import './styles/Contacts.scss'; 

const Contacts = () => {
    return (
        <div className="contacts">
          <div className="container">
            <div className="contacts-wrapper">
              <div className="contacts-left">
                <div className="contacts-left-mail">
                  <Icon
                    d={Contact.mail}
                    className="contacts-icon contacts__left-icons"
                  />{" "}
                  info@shoppy.com
                </div>
                <div className="contacts-left-phone">
                  <Icon
                    d={Contact.phone}
                    className="contacts-icon contacts__left-icons"
                  />{" "}
                  453-5553-996
                </div>
              </div>
              <div className="contacts-right">
                <Icon
                  d={Contact.facebook}
                  className="contacts-icon  contacts__right-icons"
                />
                <Icon
                  d={Contact.twitter}
                  className="contacts-icon  contacts__right-icons"
                />
                <Icon
                  d={Contact.google}
                  className="contacts-icon contacts__right-icons"
                />
                <Icon
                  d={Contact.instagram}
                  className="contacts-icon  contacts__right-icons"
                />
              </div>
            </div>
          </div>
        </div>
    );
};

export default Contacts;