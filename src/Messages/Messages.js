import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";

const Messages = ({ messages }) => {
  return (
    <div className="messages">
      {messages.map((message) => {
        return (
          <Message username={message.username} message={message.message} />
        );
      })}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.object.isRequired,
};

export default Messages;
