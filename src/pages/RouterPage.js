import React, { Component } from "react";
import {
  HashRouter,
  BrowserRouter,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "./LoginPage";

export default class RouterPage extends Component {
  render() {
    const id = 1235;
    return (
      <div>
        <h3>RouterPage</h3>
        <BrowserRouter>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          <Link to={"/search/" + id}>搜索</Link>
          <Link to="/aaa">不知道的页面</Link>

          <Switch>
            <Route
              exact
              path="/"
              component={HomePage}
              // children={() => <div>hah</div>}
              // render={() => <div>render</div>}
            />
            <Route exact path="/home" component={HomePage} />
            {/* <Route path="/user" component={UserPage} /> */}
            <PrivateRoute path="/user" component={UserPage} />
            <Route path="/login" component={LoginPage} />

            <Route path="/search/:id" component={Search} />

            <Route component={() => <div>404</div>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function Search(props) {
  console.log("props", props);
  const { id } = props.match.params;
  return (
    <div>
      Search: {id}
      <Link to="/search/detail">{id}详情</Link>
      <Route path="/search/detail" component={Detail} />
    </div>
  );
}

function Detail(props) {
  return <div>Detail</div>;
}
