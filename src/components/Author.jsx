import React, { useState } from "react";
import "./Author.css";

const Author = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="quote-info-container"
      style={{ background: hover && "#333333", cursor: hover && "pointer" }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => props.setShow(false)}
    >
      <div>
        <h4 className="author" style={{ color: hover && "#F2F2F2" }}>
          {props.quoteAuthor}
        </h4>
        <p className="genre">{props.quoteGenre}</p>
      </div>
      {hover && (
        <div className="arrow">
          <span className="material-icons">arrow_right_alt</span>
        </div>
      )}
    </div>
  );
};

export default Author;
