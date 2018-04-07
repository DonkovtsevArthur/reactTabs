import React from "react";
import Button from "./Button";

const tabsContent = ["TAB 1", "TAB 2", "TAB 3"];

const Tabs = props => {
  const dataTab = "tab";

  return (
    <div>
      {tabsContent.map((item, index) => (
        <Button
          active={props.active}
          key={index}
          data={dataTab + (index + 1)}
          click={props.click}
        >
          {item}
        </Button>
      ))}
      {props.children}
    </div>
  );
};

export default Tabs;
