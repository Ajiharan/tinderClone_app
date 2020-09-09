import React, { useState } from "react";
import "./ChatScreen.css";
const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      name: "Drithika",
      image: "",
      message: "Whats up man",
    },
    {
      name: "Drithika",
      image: "",
      message: "Let's do it..",
    },
    {
      message: "what do you want?",
    },
  ]);
  return (
    <div className="chatScreen">
      <p>You matched with Drithika on 10/12/2070</p>
      {messages.map((message) => (
        <div>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatScreen;
