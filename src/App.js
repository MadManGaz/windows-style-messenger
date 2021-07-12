import { useState } from "react";
import "xp.css/dist/XP.css";
import "./App.css";
import Header from "./Header";
import { Messages } from "./Messages";
import SendBox from "./SendBox";
import ClassicWindow from "./ClassicWindow";

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
      <ClassicWindow windowWidth={300} windowTitle="Messenger">
        <Header />
        <Messages messages={messages} />
        <SendBox handleSend={handleSend} />
      </ClassicWindow>
    </div>
  );
}

export default App;
