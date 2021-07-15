import React from "react";
import Card from "../components/Card/";
import Data from "../constants/DataDummy";
import "../components/Card/Card.css";

function CardItem() {
  return (
    <div className="card-item">
      <Card image={Data.album.images[0].url} title={Data.name} artist={Data.artists[0].name} album={Data.album.name} />
    </div>
  );
}

export default CardItem;
