import React, { useState, useEffect } from "react";
import Content from "./Content";
import Quotelist from "./Quotelist";
import Header from "./Header";

function MainHeader() {
  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const initialState = "&limit=6";
  const url = "https://quote-garden.herokuapp.com/api/v3/quotes/random";
  const [urlParam, setUrlParam] = useState(initialState);
  const [moreBtnState, setMoreBtnState] = useState(true);

  const getRandomQuote = async () => {
    const res = await fetch(url);
    const quoteData = await res.json();
    setData(quoteData.data[0]);
  };

  useEffect(() => {
    getRandomQuote();
  }, [count]);

  function handler() {
    setCount((prev) => prev + 1);
    setUrlParam(initialState);
    setMoreBtnState(true);
  }

  function display() {
    setShow(true);
  }

  return (
    <React.Fragment>
      <Header
        clicked={true}
        clickHandler={handler}
        text="random"
        icon="autorenew"
        show={show}
        setDisplay={display}
      />
      {show && <Content setShow={setShow} data={data} />}
      {!show && (
        <Quotelist
          author={data.quoteAuthor}
          urlParam={urlParam}
          setUrlParam={setUrlParam}
          showBtn={moreBtnState}
          setShowBtn={setMoreBtnState}
        />
      )}
    </React.Fragment>
  );
}

export default MainHeader;
