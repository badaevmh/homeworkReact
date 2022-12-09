import React, { Component } from "react";
import UsersList from "../components/UsersList";
import store from '../stores/userStore';
import {getUsers} from '../actions/actionCreators';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.onUserChange = this.onUserChange.bind(this);
  }

  onUserChange() {
    const users = store.users;
    this.setState({ users })
  }
  render() {

    return (
      <div><UsersList users={this.state.users} /></div>
    );
  }

  componentDidMount() {
    getUsers();
    store.on('change', this.onUserChange);
  }

  componentWillUnmount() {
    store.removeListener('change', this.onUserChange);
  }
}
