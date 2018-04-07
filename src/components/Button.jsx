import React from "react";
const bth = {
  border: "none",
  color: "white",
  backgroundColor: "blue",
  padding: "10px 25px",
  margin: "5px",
  transition: ".65s ease"
};
const Button = props => {
  return (
    <button
      style={bth}
      className={props.active === props.data ? "active" : " "}
      data-tab={props.data}
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};

export default Button;
