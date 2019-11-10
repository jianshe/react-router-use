import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
  render() {
    const { isLogin, login, location } = this.props;
    console.log("props", this.props);
    const { redirect = "/" } = location.state || {};
    if (isLogin) {
      return <Redirect to={redirect} />;
    }
    return (
      <div>
        <h3>LoginPage</h3>
        <button onClick={login}>login</button>
      </div>
    );
  }
}

export default connect(
  state => {
    return { isLogin: state.user.isLogin };
  },
  {
    login: () => ({ type: "loginSuccess" }),
  },
)(LoginPage);
