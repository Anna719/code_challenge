import react from "react";
import "../Styles/Header/Header.css";
import { headerParagraph, checks, buttonText } from "./data";
import played from "../asssets/Play.png";
import airbus from "../asssets/Airbus.png";
import forbes from "../asssets/Forbes.png";
import nascar from "../asssets/Nascar.png";
import university from "../asssets/USC.png";
import rightImage from '../asssets/BG.png';
import header_chat from '../asssets/header_chat.png';

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="leftSide">
        <h1>
          Provide excellent <span>customer</span> service.
        </h1>
        <p>{headerParagraph}</p>
        <div className="smallChecks">{checks}</div>
        <div className="playButtons">
          <button>{buttonText}</button>
          <img src={played} />
          <p className="action">See It In Action</p>
        </div>
        <span className="company">Used by</span>
        <div className="companies">
          <img src={airbus} />
          <img src={forbes} />
          <img src={nascar} />
          <img src={university} />
        </div>
      </div>
      <div className="rightSide">
        <img src={rightImage}/>
        <img src={header_chat} className="headerChat"/>
      </div>
    </div>
  );
};
export default Header;
