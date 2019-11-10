import React, { Component } from "react";
// import { BrowserRouter, Link, Route } from "react-router-dom";
import { BrowserRouter, Link, Route } from "../my-react-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";

export default class MyRouterPage extends Component {
  render() {
    return (
      <div>
        <h3>MyRouterPage</h3>
        <BrowserRouter>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          <Route path="/" exact component={HomePage} />
          <Route path="/user" component={UserPage} />
        </BrowserRouter>
      </div>
    );
  }
}
