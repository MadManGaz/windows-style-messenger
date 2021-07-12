import React, { useState } from "react";
import PropTypes from "prop-types";

const SendBox = ({ handleSend }) => {
  const [message, setMessage] = useState("");
  const username = "sample_name";

  return (
    <div className="send-box">
      <label htmlFor="message_content">Message:</label>
      <input
        id="message_content"
        className="message-text-box"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={() => handleSend({ username: username, message: message })}
      >
        Send
      </button>
    </div>
  );
};

SendBox.propTypes = {
  handleSend: PropTypes.func.isRequired,
};

export default SendBox;
