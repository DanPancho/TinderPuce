import React from "react";
import ChatArea from "../chatarea/ChatArea";
import NavBar from "../NavBar/NavBar";
import SideBarResponsive from "../sidebar/SideBarResponsive";

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
