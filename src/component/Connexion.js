import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Connexion extends Component {
  state = {
    pseudo: "",
    goToChat: false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ goToChat: true });
  };

  handleChange = (e) => {
    const pseudo = e.target.value;
    this.setState({ pseudo });
  };

  render() {
    if (this.state.goToChat) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>;
    }
    return (
      <div className="connexionBox">
        <form className="connexion" onSubmit={this.handleSubmit}>
          <input
            value={this.state.pseudo}
            onChange={this.handleChange}
            type="text"
            placeholder="pseudo"
            required
          />
          <button type="submit">Connection</button>
        </form>
      </div>
    );
  }
}
