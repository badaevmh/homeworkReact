import React, { Component } from "react";
import Post from './Post';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }

  render() {
    let items;
    if (this.state.display) {
       items = this.props.postList.map((item, index) => {
        return <Post key={index} title={item.title} data={item.data} link={item.link}>
          {item.postBody}
        </Post>
      }
    )}
    return (
      <div>
        <div
          className="blog-open"
          onClick={() => {
            this.setState({ display: !this.state.display });
          }}
        >
          Скрыть/показать новости
        </div>
        <div className="blog">
        {items}
        </div>

      </div>
    );
  }
}
