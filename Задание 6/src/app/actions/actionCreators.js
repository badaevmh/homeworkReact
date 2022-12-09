import axios from "axios";
import dispatcher from '../dispatcher';

export function getPosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts/').then(response => {
      const data = response.data;
      const action = {
        type: 'GET_POSTS',
        data: data
      };
      dispatcher.dispatch(action);
    })
}

export function addPost(userId, title, body) {
  const action = {
    type: 'ADD_POST',
    data: { userId, title, body}
  };
  dispatcher.dispatch(action);
}

export function getUsers() {
  axios.get('https://jsonplaceholder.typicode.com/users/').then(response => {
    const data = response.data;
    const action = {
      type: 'GET_USERS',
      data: data
    };
    dispatcher.dispatch(action);
  })
}