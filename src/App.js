import { ReactComponent as Logo } from "./logo.svg";
import { useState } from "react";
import PropTypes from "prop-types";
import "xp.css/dist/XP.css";
import "./App.css";

/** Simple app header */
const Header = ({ profilePicture }) => {
  return (
    <div className="header">
      <h4>Messenger</h4>
      <Logo className="logo" />
    </div>
  );
};

Header.propTypes = {
  profilePicture: PropTypes.string,
};

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

const ClassicWindow = ({ windowTitle, children }) => {
  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">{windowTitle}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
};

function App() {
  const [messages, setMessages] = useState([
    { username: "Gary Moore", message: "test-content" },
    { username: "Steven Stove", message: "A good feed!" },
  ]);

  const handleSend = (message) => {
    console.log(`Sent the message "${message.message}"`);
    setMessages([...messages, message]);
  };

  return (
    <div>
      <ClassicWindow windowTitle="Messenger">
        <Header />
        <Messages messages={messages} />
        <SendBox handleSend={handleSend} />
      </ClassicWindow>
    </div>
  );
}

export default App;
