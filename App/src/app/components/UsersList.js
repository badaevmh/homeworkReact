import React, { Component } from "react";
import axios from "axios";
import User from "../components/User";

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  render() {
    if (!this.state.users.length) {
      return null;
    }

    const users = this.state.users.map((user) => {
      return <User key={user.id} {...user} />;
    });
    return (
      <div>
        <h1 className="m-2">Пользователи</h1>
        {users}
      </div>
    );
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      this.setState({ users: response.data });
    });
  }
}
