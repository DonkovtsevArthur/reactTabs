import React from "react";
const contentTab = {
  tab1: { text: "Hello" },
  tab2: { text: "Hello world" },
  tab3: { text: "Loren Input" }
};
const style = {
  marginTop: "20px",
  transition: ".55s ease",
  opacity: "0",
  position: "absolute",
  width: "100%",
  height: "200px",
  color: "white"
};
const Tab = props => {
  return (
    <div style={style} className={props.active === props.label ? " ac" : ""}>
      {contentTab[props.label].text} {props.label}
    </div>
  );
};

export default Tab;
