import React from "react";
import cooking from "../../assets/gifs/cooking.gif";
import "./HeroSection.css";
function HeroSection(props) {
  return (
    <div className="hero__section">
      <div>
        <h1 className="hero__section-header">
          &nbsp; Chefs <br />
          Academy <br />
          &nbsp;  Secrets
        </h1>
      </div>
      <img
        className="hero__section-cooking"
        src={cooking}
        alt="woman-cooking"
      />
    </div>
  );
}

export default HeroSection;
