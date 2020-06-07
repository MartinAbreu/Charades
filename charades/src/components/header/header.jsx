import React from "react";
import logo from "../../images/CharadesLogo.png";

import "./header.style.scss";

const Header = ({ changeCounter }) => (
  <div className="header">
    <div className="logo-wrap">
      <img className="logo" src={logo} alt="logo"></img>
    </div>
  </div>
);

export default Header;
