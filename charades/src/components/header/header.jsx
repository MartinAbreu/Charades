import React from "react";
import logo from "../../images/CharadesLogo.png";

import "./header.style.scss";

const Header = () => (
  <div>
    <img className="logo" src={logo} alt="logo"></img>
  </div>
);

export default Header;
