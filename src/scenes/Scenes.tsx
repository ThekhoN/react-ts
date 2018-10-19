import * as React from "react";
// import { Route, Switch, HashRouter } from "react-router-dom";
import Login from "./login/Login";

const exampleUser = {
  name: "Jose F",
  profile: "F1"
};

class Scenes extends React.Component {
  render() {
    return (
      <div className="scenes-container">
        <Login name={exampleUser.name} profile={exampleUser.profile} />
      </div>
    );
  }
}

export default Scenes;
