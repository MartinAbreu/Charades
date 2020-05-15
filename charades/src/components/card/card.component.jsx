import React from "react";

import "./card.style.scss";

const Card = ({ word }) => (
  <div>
    <div className="card-container">
      <span>{word}</span>
    </div>
  </div>
);

export default Card;
