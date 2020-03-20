import React from "react";

export default function Messages({ pseudo, message, isUser }) {

  if (isUser(pseudo)) {
    return <div className="user-message">{message} </div>;
  } else {
      return <div className="not-user-message"><strong>{pseudo}: </strong>{message} </div>;
  }
}
