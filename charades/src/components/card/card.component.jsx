import React from "react";
import logo from "../../images/CharadesLogo.png";

import "./card.style.scss";

const Card = ({ word }) => (
  <div className="card-container">
    <div className="back">
      <span className="difficulty">Easy</span>
      <span className="word">{word}</span>
    </div>
    <div className="front">
      <img className="frontTitle" src={logo} alt="logo"></img>
    </div>
  </div>
);

export default Card;
