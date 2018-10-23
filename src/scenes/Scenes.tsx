import * as React from "react";
import { Route, Router } from "react-router-dom";
import Fruits from "./fruits/Fruits";
import ToggleApp from "./toggle-app/ToggleApp";
import Login from "./login/Login";
import Counter from "../components/Counter";
import createHistory from "history/createBrowserHistory";
import Nav from "../components/Nav/Nav";

const history = createHistory();

class Scenes extends React.Component {
  render() {
    return (
      <div className="scenes-container">
        <Router history={history}>
          <div>
            <Route component={Nav} />
            <Route exact={true} path="/" component={Login} />
            <Route path="/search" component={Fruits} />
            <Route path="/counter" component={Counter} />
            <Route path="/toggle-app" component={ToggleApp} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Scenes;
