import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    console.log(this.props)
    return (
      <article className='post'>
        <h2 className="post-title">{this.props.title}</h2>
        <div className="post-data">{this.props.data}</div>
        <div className='post-image'></div>
        <p className="post-body">{this.props.children}</p>
        <a href={this.props.link} className="post-link">Ссылка на пост</a>
      </article>
    )
  }
}
