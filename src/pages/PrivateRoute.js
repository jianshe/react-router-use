import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class PrivateRoute extends Component {
  render() {
    const { path, component, isLogin } = this.props;
    if (isLogin) {
      return <Route path="/user" component={component} />;
    }
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { redirect: path },
        }}
      />
    );
  }
}

export default connect(state => {
  return { isLogin: state.user.isLogin };
})(PrivateRoute);
