import React from "react";
import "./Chat.css";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
const Chat = ({ name, message, profilePic, timestamp }) => {
  return (
    <Link to={`/chat/${name}`}>
      <div className="Chat">
        <Avatar className="chat__image" src={profilePic} />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
};

export default Chat;
