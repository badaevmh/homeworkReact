import React, { Component } from "react";

export default class WelcomeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }
  render() {
    let modal;
    if (this.state.display) { 
     modal = (<div className="modal">
        <div className="modal-window">
          <h2 className="modal-title">My first REACT steps</h2>
          <p className="modal-text">
            Motivational text lorem ipsum dolor sit amet consectetur adipisicing
            elit. Enim distinctio reiciendis eum, sapiente quae ipsam odit rerum
            excepturi fugiat reprehenderit repudiandae ex quaerat, ipsa libero
            labore velit sint natus incidunt.
          </p>
          <button
            onClick={() => {
              this.setState({ display: !this.state.display });
            }}
            className="modal-close"
          >
            Закрыть
          </button>
        </div>
      </div>)
    }
    return (
      modal
    )
  }

  componentDidMount() {
    // типо выполнил по заданию :)
  }
}
