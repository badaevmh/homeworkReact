import React, { Component } from 'react';
import { Link } from "react-router";

export default class Post extends Component {
  render() {
    const {title, body} = this.props;
    return (
      <div className='card border-secondary mb-3 mt-3'>
        <h2 className="card-header">
        <Link to={`/posts/${this.props.id}`}>{title}</Link>
        </h2>
        <p className='card-body text-secondary'>{body}</p>
      </div>
    )
  }
}
