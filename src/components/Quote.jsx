import React from "react";
import "./Quote.css";

const Quote = (props) => {
  return (
    <div className="quote">
      <p>{props.quoteText}</p>
    </div>
  );
};

export default Quote;
