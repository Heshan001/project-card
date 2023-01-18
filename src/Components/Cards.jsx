import React from "react";
import "./Cards.css";

function Cards({ title, imageUrl, description }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="project" />
      </div>

      <div className="card-title">
        <h3>{title}</h3>
      </div>

      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Cards;
