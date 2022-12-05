import React, { Component } from 'react';
import axios from "axios";
import Commentary from '../components/Commentary';

export default class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }
  render() {

    if (!this.state.comments.length) {
      return null;
    }

    const comments = this.state.comments.map((comment) => {
      return <Commentary key={comment.id} {...comment}/>
    });
    
    return (
      <div>
        <h1 className="m-2">Комментарии</h1>
        {comments}
      </div>
    );
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      this.setState({ comments: response.data });
    });
  }
}
