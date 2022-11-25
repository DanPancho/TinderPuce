import React from "react";
import ChatArea from "../ChatArea/ChatArea";
import NavBar from "../NavBar/NavBar";

const MainChat = () => {
  return (
    <>
      <NavBar />
      <div className="d-flex">
        <ChatArea />
      </div>
    </>
  );
};

export default MainChat;
