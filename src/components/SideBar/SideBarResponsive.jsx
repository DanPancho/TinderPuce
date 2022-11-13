import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ListGroup from "react-bootstrap/ListGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";
import { auth, db } from "../../../config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { useRouter } from "next/router";

const SideBarResponsive = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const q = query(
    collection(db, "chats"),
    where("users", "array-contains", user.email)
  );
  const [snapshot] = useCollection(q);
  const chats = snapshot?.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return (
    <>
      <Navbar expand={false}>
        <Container fluid>
          <Navbar.Toggle className="bg-light" />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand`} placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand`}
                className="d-flex"
              >
                <h2 style={{ marginLeft: "4.5%" }}>Chat</h2>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
              <ListGroup style={{ paddingTop: "1em", overflowY: "auto" }}>
                {chats?.length &&
                  chats.map((data, index) => (
                    <ListGroup.Item action className="mb-2" key={index}>
                      <div className="d-flex">
                        <div style={{ marginLeft: "4.5%" }}>
                          {data?.users.map(
                            (dataUser, index) =>
                              dataUser !== user.email && (
                                <div
                                  key={index}
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    router.push(`/Chat/${data.id}`);
                                  }}
                                >
                                  <Image
                                    width={35}
                                    height={30}
                                    src="/favicon.ico"
                                    alt="Imagen usuario"
                                  />
                                  {dataUser}
                                </div>
                              )
                          )}
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default SideBarResponsive;
