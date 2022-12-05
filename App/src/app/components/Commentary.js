import React, { Component } from "react";
import { Link } from "react-router";

export default class Commentary extends Component {
  render() {
    const { name, email, body } = this.props;
    return (
      <div className="card border-secondary mb-3 mt-3">
        <h2 className="card-header">
          <Link to={`/comments/${this.props.id}`}>{name}</Link>
        </h2>
        <p className="card-body text-secondary">{email}</p>
        <p className="card-body text-secondary">{body}</p>
      </div>
    );
  }
}
