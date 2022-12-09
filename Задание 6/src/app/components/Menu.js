import React, { Component } from "react";
import { Link } from "react-router";

export default class Menu extends Component {
  render() {
    return (
      <header className="p-3 text-bg-dark">
        <div className="container">
          <nav className="nav">
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              {this.props.brand}
            </Link>
            <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">{this.props.children}</ul>
          </nav>
        </div>
      </header>
    );
  }
}
