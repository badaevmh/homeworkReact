import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./app/layouts/Layout";
import Main from "./app/pages/Main";
import PageNotFound from "./app/pages/PageNotFound";
import Users from "./app/pages/Users";
import Posts from "./app/pages/Posts";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main} />
      <Route path="users" component={Users}>
      </Route>
      <Route path="posts" component={Posts}>
      </Route>
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>,
  document.getElementById("root")
);
