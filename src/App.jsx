import React, { Component } from "react";

import Tabs from "./components/Tabs";
import Tab from "./components/Tab";


import "./App.css";

const tab = [
  { tab1: "Hello" },
  { tab2: "Hello World" },
  { tab3: "Hello Gays" }
];

class App extends Component {
  state = {
    active: "tab1"
  };
  shouldComponentUpdate = (nextProps, nextState) =>
    this.state.active !== nextState.active;

  handleClick = e => {
    const tab = e.target.getAttribute("data-tab");
    window.location.hash = tab;
    this.setState({ active: tab });
  };

  render() {
    const { active } = this.state;

    return (
      <div className="App">
        <header className="App-header">
   
          <h1 className="App-title">React 16</h1>
        </header>
        <Tabs click={this.handleClick} active={active}>
          {tab.map((item, index) => {
            let tab = "tab" + (index + 1);
            return (
              <Tab key={index} label={tab} active={active}>
                {item[tab]}
              </Tab>
            );
          })}
        </Tabs>
      </div>
    );
  }
}

export default App;
