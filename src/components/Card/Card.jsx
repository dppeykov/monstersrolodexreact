import React from "react";
import "./Card.css";

const Card = ({ name, email }) => {
  return (
    <div className="card-container">
      <img alt="monster" src={`https://robohash.org/${name}?set=set2`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
