import React from "react";
import Button from "./Button";
import "./Header.css";

function Header(props) {
  return (
    <header
      style={{ justifyContent: !props.show ? "space-between" : "flex-end" }}
    >
      {!props.show && (
        <Button text="back" clicked={true} clickHandler={props.setDisplay} />
      )}
      <Button
        clicked={props.clicked}
        clickHandler={props.clickHandler}
        text={props.text}
        icon={props.icon}
      />
    </header>
  );
}

export default Header;
