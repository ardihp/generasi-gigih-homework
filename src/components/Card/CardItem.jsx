import React from "react";
import Card from "./Card";
import Data from "../../constants/DataDummy";
import "./Card.css";

function CardItem() {
  return (
    <div className="card-item">
      <Card title={Data.name} artist={Data.artists[0].name} album={Data.album.name} />
    </div>
  );
}

export default CardItem;
