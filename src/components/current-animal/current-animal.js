import "./current-animal.css";
import React from "react";
import ImageAnimal from "../imageAnimal/image-animal";

const CurrentAnimal = ({ data }) => {
  let imageURL = ImageAnimal(data.label);

  return (
    <div className="animal">
      <div className="top">
        <img alt={data.label} className="animal-image" src={imageURL} />
        <div>
          <p className="name">{data.label}</p>
          <p className="location">{data.location}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label-top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Type</span>
            <span className="parameter-value">{data.type}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Diet</span>
            <span className="parameter-value">{data.diet}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Predators</span>
            <span className="parameter-value">{data.predators}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Prey</span>
            <span className="parameter-value">{data.prey}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Biggest Threat</span>
            <span className="parameter-value">{data.biggest_threat}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Lifespan</span>
            <span className="parameter-value">{data.lifespan}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentAnimal;
