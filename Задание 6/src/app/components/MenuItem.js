import React, { Component } from "react";
import { Link } from "react-router";

export default class MenuItem extends Component {
  render() {
    return (
      <li>
        <Link className={this.props.active ? "nav-link px-4 text-secondary" : "nav-link px-4 text-white"} to={this.props.href}>{this.props.children}</Link>
      </li>
    );
  }
}
