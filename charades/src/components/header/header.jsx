import React from "react";
import logo from "../../images/CharadesLogo.png";

import "./header.style.scss";
import Timer from "../timer/timer";

const Header = () => (
  <div className="header">
    <img className="logo" src={logo} alt="logo"></img>
    <Timer count={55} />
  </div>
);

export default Header;
