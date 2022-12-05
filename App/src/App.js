import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./app/layouts/Layout";
import Main from "./app/pages/Main";
import PageNotFound from "./app/pages/PageNotFound";
import Users from "./app/pages/Users";
import User from "./app/pages/User";
import Blog from "./app/pages/Blog";
import Post from "./app/pages/Post";
import Comments from "./app/pages/Comments";
import Comment from "./app/pages/Comment";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main} />
      <Route path="users" component={Users}>
        <Route path=":userId" component={User} />
      </Route>
      <Route path="posts" component={Blog}>
        <Route path=":userId" component={Post} />
      </Route>
      <Route path="comments" component={Comments}>
        <Route path=":postId" component={Comment} />
      </Route>
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>,
  document.getElementById("root")
);
