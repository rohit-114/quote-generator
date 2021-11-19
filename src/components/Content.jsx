import React from "react";
import Quote from "./Quote";
import Author from "./Author";
import "./Content.css";

const Content = (props) => {
  return (
    <main className="main-content">
      <div className="quote-container">
        <Quote quoteText={props.data.quoteText} />
        <Author
          setShow={props.setShow}
          quoteAuthor={props.data.quoteAuthor}
          quoteGenre={props.data.quoteGenre}
        />
      </div>
    </main>
  );
};

export default Content;
