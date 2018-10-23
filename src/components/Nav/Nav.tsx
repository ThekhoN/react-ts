import * as React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Nav: React.SFC = () => (
  <nav className="nav">
    <Link to="/">Home</Link>
    <Link to="/search">search with HOC</Link>
    <Link to="/counter">counter</Link>
    <Link to="/toggle-app">toggle-app with Render Props</Link>
  </nav>
);

export default Nav;
