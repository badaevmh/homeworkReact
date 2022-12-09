import React, { Component } from 'react';
import PostsList from '../components/PostsList';
import store from '../stores/postStore';
import {getPosts, addPost} from '../actions/actionCreators';

export default class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.onPostChange = this.onPostChange.bind(this);
    this.newPost = this.newPost.bind(this);
  }

  newPost() {
    const data = {
      userId: 1,
      title: 'Название поста',
      body: 'Описание поста, много текста'
    }

    addPost(data.userId, data.title, data.body);
  }

  onPostChange() {
    const posts = store.posts;
    this.setState({ posts })
  }

  render() {
    return (
      <div>
      <button onClick={this.newPost} className='btn btn-primary mt-3'>Добавить пост</button>
      <PostsList posts={this.state.posts} />
      </div>
    );
  }

  componentDidMount() {
    getPosts();
    store.on('change', this.onPostChange);
  }

  componentWillUnmount() {
    store.removeListener('change', this.onPostChange);
  }
}
