import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
const ChatScreen = () => {
  const [input, setInput] = useState("");
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
  const submitHandler = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        You matched with Drithika on 10/12/2070
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input" onSubmit={(e) => submitHandler(e)}>
        <input
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="chatScreen__inputbutton">Send</button>
      </form>
    </div>
  );
};

export default ChatScreen;
