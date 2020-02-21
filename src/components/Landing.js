import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Landing.scss";

const Landing = () => {
  return (
    <div className="top-land">
      <div className="left-shadow">
        <div className="left-land">
          <div id="avatar"></div>
        </div>
      </div>
      <div className="right-land">
        <div className="blankRight"></div>
        <div className="fullRight">
          <h1>Brett Sherwood</h1>
          <h3>Software Developer</h3>
        </div>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon="coffee" size="6x" />
        <a href="https://www.linkedin.com/in/brett-sherwood/">
          <FontAwesomeIcon icon={faTwitterSquare} size="6x" />
        </a>
        <a href="https://twitter.com/Bsherwood9">
          <FontAwesomeIcon icon={faLinkedin} size="6x" />
        </a>
        <a href="https://twitter.com/Bsherwood9">
          <FontAwesomeIcon icon={faGithubSquare} size="6x" />
        </a>
      </div>
    </div>
  );
};
export default Landing;
