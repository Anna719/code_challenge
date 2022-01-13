import react from "react";
import "../Styles/Pioneering/Pioneering.css";
import {
  pineerSoftware,
  question,
  pioneerText,
  generateService,
  improveSatisfaction,
  boostValue,
  pioneerButton,
} from "./data";
import backImage from "../asssets/Elements.png";
import component1 from "../asssets/Graf.png";
import thirty from "../asssets/30%.png";

const Pioneering = () => {
  return (
    <div className="pioneerContainer">
      <div className="pioneerLeft">
        <p className="bestPrice">{pineerSoftware}</p>
        <h1>{question}</h1>
        <p>{pioneerText}</p>
        <img src={backImage} />
        <div className="graphContainer">
          <img src={component1} />
        </div>
      </div>
      <div className="pioneerRight">
        <div className="pioneerCards">
          <div className="pioneerCard">
            <h2>30%</h2>
            <div className="cardsInfo">
              <p className="bold">Generate revenue</p>
              <p className="cardstext">{generateService}</p>
            </div>
          </div>
          <div className="pioneerCard">
            <h2>97%</h2>
            <div className="cardsInfo">
              <p className="bold">Improve satisfaction</p>
              <p className="cardstext">{improveSatisfaction}</p>
            </div>
          </div>
          <div className="pioneerCard">
            <h2>16x</h2>
            <div className="cardsInfo">
              <p className="bold">Boost customer value</p>
              <p className="cardstext">{boostValue}</p>
            </div>
          </div>
          <button>{pioneerButton}</button>
        </div>
      </div>
    </div>
  );
};

export default Pioneering;
