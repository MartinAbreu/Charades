import React from "react";
import Card from "../card/card.component";
import "./cardList.style.scss";

const CardList = ({ count }) => (
  <div>
    {count.map((count) => (
      <Card word={count} />
    ))}
  </div>
);

export default CardList;
