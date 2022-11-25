import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useAuthState as UseAuthState } from "react-firebase-hooks/auth";
import { useCollectionData as UseCollectionData } from "react-firebase-hooks/firestore";
import { auth, db } from "../../../config";
import {
  collection,
  orderBy,
  query,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import SideBarResponsive from "../SideBar/SideBarResponsive";
import Image from "next/image";

const ChatArea = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const [user] = UseAuthState(auth);
  const q = query(collection(db, `chats/${id}/messages`), orderBy("timestamp"));
  const [messages] = UseCollectionData(q);
  const bottomOfChat = useRef();
  console.log(messages);

  const sendMessage = async (e, dataAux = '') => {
    e !== '' && e.preventDefault();
    await addDoc(collection(db, `chats/${id}/messages`), {
      text: dataAux==='' ? input : dataAux,
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
        <h3 className="text-white pt-3">Chat Area </h3>
      </div>
      <div
        className="w-100 bg-light"
        style={{ height: "77vh", overflowY: "auto", marginTop: "4.5em" }}
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
              <Button
                className="btn-secondary"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                Frases L.Señas
              </Button>
            </InputGroup>
            {open && (
              <div
                style={{ height: "40vh", overflowY: "auto" }}
                className={"bg-light"}
              >
                <div className="d-flex justify-content-center mb-4">
                  <Image
                    src={"/img/saludo.gif"}
                    width={500}
                    height={300}
                    style={{ cursor: "pointer" }}
                    onClick={()=>sendMessage('','Hola!')}
                    alt='img'
                  />
                </div>
                <div className="d-flex justify-content-center mb-4">
                  <Image
                    src={"/img/pedirNumero.gif"}
                    width={500}
                    height={300}
                    style={{ cursor: "pointer" }}
                    onClick={()=>sendMessage('','¿Me puedes pasar tu número de WhatsApp?')}
                    alt='img'
                  />
                </div>
                <div className="d-flex justify-content-center mb-4">
                  <Image
                    src={"/img/estudias.gif"}
                    width={500}
                    height={300}
                    style={{ cursor: "pointer" }}
                    onClick={()=>sendMessage('','¿tu estudias o trabajas?')}
                    alt='img'
                  />
                </div>
                <div className="d-flex justify-content-center mb-4">
                  <Image
                    src={"/img/Adios.png"}
                    width={500}
                    height={300}
                    style={{ cursor: "pointer" }}
                    alt='img'
                    onClick={()=>sendMessage('','Adios!')}
                  />
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatArea;
