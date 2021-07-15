import React from "react";
import "./Card.css";
import Image from "../Image/";
import Button from "../Button/";
import Description from "../Description/";

function Card(props) {
  return (
    <div className="card">
      <div className="container">
        <Image src={props.image} />
        <Description
          title={props.title}
          artist={props.artist}
          album={props.album}
        />
        <Button />
      </div>
    </div>
  );
}

export default Card;
