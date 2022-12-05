import React, { Component } from "react";
import axios from "axios";

import UserCard from "../components/User";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  render() {
    return (
      <div>
        <h2 className="m-2">{this.state.user && this.state.user.name}</h2>
        {this.state.user && <UserCard {...this.state.user} />}
      </div>
    );
  }

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${this.props.params.userId}`
      )
      .then((response) => {
        const data = response.data;
        this.setState({ user: data });
      });
  }
}
