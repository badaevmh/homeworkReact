import React, { Component } from "react";
import axios from "axios";
import Post from "../components/Post";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  render() {

    if (!this.state.posts.length) {
      return null;
    }

    const posts = this.state.posts.map((post) => {
      return <Post key={post.id} {...post}/>
    });
    
    return (
      <div>
        <h1 className="m-2">Посты</h1>
        {posts}
      </div>
    );
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({ posts: response.data });
    });
  }
}

export default PostList;
