import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSignOut } from "react-firebase-hooks/auth";
import NavDropdown from "react-bootstrap/NavDropdown";
import alerts from "../alerts/alerts";
import { async } from "@firebase/util";
import { useRouter } from "next/router";
import Routes from "../../helpers/Routes";
import { auth } from "../../../config";

const NavBar = () => {
  const [signOut] = useSignOut(auth);
  const router = useRouter();

  return (
    <>
      <Navbar expand="lg" className={"navbar-dark bg-dark"}>
        <Container>
          <Navbar.Brand>TinderPuce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <button
                className="btn"
                style={{ color: "#fff" }}
                onClick={() => {
                  router.push(`/${Routes.INIT}`);
                }}
              >
                Home
              </button>
              <button
                className="btn"
                style={{ color: "#fff" }}
                onClick={() => {
                  router.push(`${Routes.CHAT}`);
                }}
              >
                Chats
              </button>
              <button
                className="btn"
                style={{ color: "#fff" }}
                onClick={() => {
                  router.push(`${Routes.CONFIGURATION}`);
                }}
              >
                Configuración
              </button>
              <button
                className="btn"
                style={{ color: "#fff" }}
                onClick={() => {
                  router.push(`${Routes.QUIENESSOMOS}`);
                }}
              >
                ¿Quiénes somos?
              </button>
              <button
                className="btn"
                style={{ color: "#fff" }}
                onClick={async () => {
                  const success = await signOut();
                  if (!success) {
                    alerts(
                      "center",
                      false,
                      false,
                      "error",
                      "No se pudo cerrar sesión"
                    );
                  }
                }}
              >
                Cerrar Sesión
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
