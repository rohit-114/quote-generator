import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div
      className="btn-container"
      onClick={props.clicked ? () => props.clickHandler() : null}
    >
      <button className="btn">{props.text}</button>
      <span className="material-icons">{props.icon}</span>
    </div>
  );
};

export default Button;
