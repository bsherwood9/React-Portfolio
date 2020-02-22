import React from "react";
import Card from "./Card";
import barber from "../assets/barbers.png";
import tipsease from "../assets/tipsease.png";
import spider from "../assets/spidergraph.png";
import bsher from "../assets/bsher.png";
import nasa from "../assets/nasa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="project-grid">
      <div className="back-image"></div>
      {/* <div className="square">
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className="square">TipSease</div>
      <div className="square">SpiderGraph</div>
      <div className="square">Novice</div>
      <div className="square">NASA</div>
      <div className="square">Rick&Morty</div> */}
      <Card
        project="Mr. Beauregard's"
        comments="This was one of my first projects where I explored how to use CSS. It showed me how easy it was to create beautiful things"
      />
      <Card
        project="TipSease"
        comments="I created and designed this landing page and about page. I was pleased with the logo and animations"
      />
      <Card
        project="SpiderGraph"
        comments="I worked with a fellow front-end developer and a backend developer to create this react app. Used chartjs and material-ui"
      />
      <Card
        project="1st Personal Website"
        comments="Created this small website using less, HTML5 and CSS3. "
      />
      <Card
        project="NASA Photo of the Day"
        comments="This project pulls data from NASA's Astronomy of the Day API."
      />
    </div>
  );
};

export default Portfolio;
