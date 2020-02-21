import React from "react";
import "../styles/Portfolio.scss";

const Card = ({ project, url, comments }) => {
  return (
    <div className="card">
      <h1>{project}</h1>
      <p>{comments}</p>
      <img src={url} />
    </div>
  );
};

export default Card;
