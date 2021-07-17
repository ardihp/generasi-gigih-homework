import React from "react";
import Card from "../components/Card/";
import Data from "../constants/DataDummy";
import "../components/Card/Card.css";

function CardItem() {
  return (
    <div className="card-item">
      {
        Data.map(D => (
          <Card key={D.id} image={D.album.images[0].url} title={D.name} artist={D.artists[0].name} album={D.album.name} />
        ))
      }
    </div>
  );
}

export default CardItem;
