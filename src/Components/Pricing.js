import React from "react";
import {
  bestPrice,
  mainText,
  pricingParagraph,
  ticketText,
  ticketTextChat,
} from "./data";
import "../Styles/Pricing/Pricing.css";
import letter from "../asssets/pricing-icon-ticket-2 1.png";
import letterchat from "../asssets/pricing-icon-ticketchat 1.png";

const Pricing = () => {
  return (
    <div className="pricingContainer">
      <div className="pricingLeft">
        <p className="bestPrice">{bestPrice}</p>
        <h1>{mainText}</h1>
        <p>{pricingParagraph}</p>
        <button>Pricing</button>
      </div>
      <div className="pricingRight">
        <div className="cardPricingContainer">
          <img src={letter} />
          <p className="ticket">Ticket</p>
          <p className="ticketText">{ticketText}</p>
          <p className="ticket">15$ / mo</p>
          <button>Try it</button>
        </div>
        <div className="cardPricingContainer">
          <img src={letterchat} className="chat" />
          <p className="ticket">Ticket+Chat</p>
          <p className="ticketText">{ticketTextChat}</p>
          <p className="ticket">29$ / mo</p>
          <button>Try it</button>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
