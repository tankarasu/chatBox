import React, { Component, createRef } from "react";
import "./App.css";
import "./animate.css";
import Formulaire from "./component/Formulaire";
import Messages from "./component/Messages";

import base from "./base";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  };

  messagesRef = createRef();

  componentDidMount() {
    base.syncState("/", {
      context: this,
      state: "messages"
    });
  }

  componentDidUpdate() {
    const ref = this.messagesRef.current;
    ref.scrollTop = ref.scrollHeight;
  }

  addMessage = (message) => {
    const messages = { ...this.state.messages };
    messages[`message-${Date.now()}`] = message;
    Object.keys(messages)
      .slice(0, -10)
      .forEach((key) => {
        messages[key] = null;
      });
    this.setState({ messages });
  };

  isUser = (pseudo) => {
    return pseudo === this.state.pseudo;
  };

  render() {
    const messages = Object.keys(this.state.messages).map((message, index) => {
      return (
        <CSSTransition key={index} timeout={500} classNames="fade">
          <Messages
            isUser={this.isUser}
            pseudo={this.state.messages[message].pseudo}
            message={this.state.messages[message].message}
          />
        </CSSTransition>
      );
    });

    return (
      <div className="box">
        <div>
          <div className="messages" ref={this.messagesRef}>
            <TransitionGroup className="message">{messages}</TransitionGroup>
          </div>
        </div>
        <Formulaire
          addMessage={this.addMessage}
          pseudo={this.state.pseudo}
          length={140}
        />
      </div>
    );
  }
}

export default App;
