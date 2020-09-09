import React from "react";
import "./Chats.css";
import Chat from "./Chat";
const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Karthika"
        message="what's going on there ? "
        timestamp="25 seconds ago."
        profilePic=""
      />
      <Chat
        name="harani"
        message="let's me in"
        timestamp="20 seconds ago."
        profilePic=""
      />
      <Chat
        name="sivani"
        message="let's take a pic.."
        timestamp="50 seconds ago."
        profilePic=""
      />
    </div>
  );
};

export default Chats;
