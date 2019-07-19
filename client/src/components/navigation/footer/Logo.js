import React from "react";
import Logo from "../Logo";
import './styles/Logo.scss'; 

const FooterLogo = () => {
  return (
    <div className="logo__wrapper">
      <Logo />
      <span>shopy &copy; 2015. your copy right here</span>
    </div>
  );
};

export default FooterLogo;
