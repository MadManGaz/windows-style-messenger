import { useState } from "react";
import "./App.css";
import { testMessages } from "./util/testMessages.json";

const Message = ({ username, message }) => {
  return (
    <div className="Card">
      <div className="MessageHeader">
        <p>{username}</p>
      </div>
      <div>
        <p className='MessageContent'>{message}</p>
      </div>
    </div>
  );
};

const Messages = ({ messages }) => {
  return messages.map((message) => (
    <Message username={message.username} message={message.message} />
  ));
};

const SendBox = ({ handleSend }) => {
  return (
    <div>
      <input type="text" />

    </div>
  )
}

function App() {
  let messages = useState(...testMessages);
  const handleSend = (message) => {
    messages = [...messages, message]
  };

  return (
    <div className="App">
      <Messages messages={messages} />
      <SendBox handleSend={handleSend} />
    </div>
  );
}

export default App;
