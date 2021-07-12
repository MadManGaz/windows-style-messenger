import React from "react";
import PropTypes from "prop-types";

const Message = ({ username, message }) => {
  return (
    <div className="card">
      <div className="message-header">{username}</div>
      <div className="message-content">{message}</div>
    </div>
  );
};

Message.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;
