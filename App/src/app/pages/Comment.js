import React, { Component } from 'react';
import axios from "axios";
import CommentaryCard from "../components/Commentary";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: null,
    };
  }

  render() {
    return <div>
      {this.state.comment && <CommentaryCard {...this.state.comment} />}
    </div>;
  }

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments/${this.props.params.postId}`
      )
      .then((response) => {
        const data = response.data;
        this.setState({ comment: data });
      });
  }
}
