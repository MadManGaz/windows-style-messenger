import { useState } from "react";
import "xp.css/dist/98.css";
import "./App.css";

const Message = ({ username, message }) => {
  return (
    <div className="card">
      <div className="message-header">{username}</div>
      <div className="message-content">{message}</div>
    </div>
  );
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
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={() => handleSend({ username: username, message: message })}
      >
        Send
      </button>
      <p>{message}</p>
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
    <ClassicWindow windowTitle="Messenger">
      <SendBox handleSend={handleSend} />
      <Messages messages={messages} />
    </ClassicWindow>
  );
}

const ClassicWindow = ({ windowTitle, children }) => {
  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">{windowTitle}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
};

export default App;
