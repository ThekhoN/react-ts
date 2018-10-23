import * as React from "react";
// import { Route, Switch, HashRouter } from "react-router-dom";
import Fruits from "./fruits/Fruits";
import ToggleApp from "./toggle-app/ToggleApp";
import Counter from "../components/Counter";

class Scenes extends React.Component {
  render() {
    return (
      <div className="scenes-container">
        <ToggleApp />
        <Counter />
        <Fruits />
      </div>
    );
  }
}

export default Scenes;
