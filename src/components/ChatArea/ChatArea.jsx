import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useAuthState as UseAuthState  } from "react-firebase-hooks/auth";
import {
  useCollectionData as UseCollectionData ,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { auth, db } from "../../../config";
import {
  collection,
  orderBy,
  query,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import SideBarResponsive from "../SideBar/SideBarResponsive";

const ChatArea = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const [user] = UseAuthState(auth);
  const q = query(collection(db, `chats/${id}/messages`), orderBy("timestamp"));
  const [messages] = UseCollectionData(q);
  const bottomOfChat = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, `chats/${id}/messages`), {
      text: input,
      sender: user.email,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  useEffect(() => {
    setTimeout(
      bottomOfChat.current.scrollIntoView({
        behavior: "smooth",
      }),
      100
    );
  }, [messages]);
  return (
    <>
      <div
        className="bg-secondary w-100"
        style={{
          height: "9vh",
          display: "flex",
          justifyContent: "space-around",
          position: "fixed",
        }}
      >
        <SideBarResponsive />
        <h3 className="text-white pt-3">Susana Oria </h3>
      </div>
      <div
        className="w-100 bg-light"
        style={{ height: "77vh", overflowY: "auto", marginTop: '4.5em'}}
      >
        {messages?.length
          ? messages.map((mensaje) =>
              mensaje.sender !== user.email ? (
                <div
                  className="bg-success text-white"
                  style={{
                    padding: "1em",
                    borderRadius: "10px",
                    width: "30%",
                    marginLeft: "69%",
                    marginBottom: "1em",
                    marginTop: "0.5em",
                  }}
                >
                  {mensaje.text}
                </div>
              ) : (
                <div
                  className="bg-primary text-white"
                  style={{
                    padding: "1em",
                    borderRadius: "10px",
                    width: "30%",
                    margin: "1%",
                  }}
                >
                  {mensaje.text}
                </div>
              )
            )
          : ""}
        <div ref={bottomOfChat}></div>
        <div className="fixed-bottom" style={{ margin: "1em" }}>
          <form onSubmit={sendMessage}>
            <InputGroup>
              <Form.Control
                placeholder="Envia un mensaje"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <Button>Button</Button>
            </InputGroup>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatArea;
