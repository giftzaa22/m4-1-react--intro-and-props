import React from "react";
import Avatar from "./Avatar";
import "./ChatMessage.css";

function ChatMessage(props) {
  if (props.messageType === "sent") {
    return (
      <div>
        {/* Sent */}
        <section>
          <div>{props.user.username}</div>
          <Avatar size={36} user={props.user} />
          <div className="chat-message">{props.body}</div>
        </section>
      </div>
    );
  } else {
    return (
      <div>
        {/* Received */}
        <section>
          <div>{props.user.username}</div>
          <Avatar size={36} user={props.user} />
          <div className="chat-message">{props.body}</div>
        </section>
      </div>
    );
  }
}

export default ChatMessage;
