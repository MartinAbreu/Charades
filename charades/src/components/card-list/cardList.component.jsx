import React from "react";
import Card from "../card/card.component";
import "./cardList.style.scss";

const CardList = ({ cardCount }) => (
  <div className="card-list">
    {cardCount
      .filter((count, inx) => inx < 4)
      .map((count) => (
        <Card key={count} />
      ))}
  </div>
);

export default CardList;
