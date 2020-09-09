import React from "react";
import "./Chats.css";
import Chat from "./Chat";
const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="thanusa"
        message="what's going on there ? "
        timestamp="25 seconds ago."
        profilePic=""
      />
      <Chat
        name="haran"
        message="let's me in"
        timestamp="20 seconds ago."
        profilePic=""
      />
      <Chat
        name="siva"
        message="let's take a pic.."
        timestamp="50 seconds ago."
        profilePic=""
      />
    </div>
  );
};

export default Chats;
