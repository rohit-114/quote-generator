import React, { useState, useEffect } from "react";
import Quote from "./Quote";
import Button from "./Button";
import "./Quotelist.css";

const Quotelist = (props) => {
  const [data, setData] = useState([]);

  const url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${props.author}${props.urlParam}`;

  useEffect(() => {
    const getQuotes = async () => {
      const res = await fetch(url);
      const quoteData = await res.json();
      setData(quoteData.data);
    };
    getQuotes();
  }, [url]);

  function setUrl() {
    props.setUrlParam("");
    props.setShowBtn(false);
  }

  return (
    <main className="quotelist">
      <h1 className="quotelist-author">{props.author}</h1>
      <div className="quotelist-container">
        {data.map((quote, index) => {
          return <Quote key={index} quoteText={quote.quoteText} />;
        })}
      </div>
      {props.showBtn && (
        <div className="more-btn">
          <Button text="more quotes" clicked={true} clickHandler={setUrl} />
        </div>
      )}
    </main>
  );
};

export default Quotelist;
