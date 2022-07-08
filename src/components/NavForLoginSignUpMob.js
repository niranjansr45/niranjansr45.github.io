import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const NavForLoginSignUpMob = () => {
  return (
    <Navbar expand={false}>
      <Container fluid>
        <Navbar.Brand style={{ color: "white" }}>
          <Link className="navbar-brand" to="/">
            <img src={logo} width="200" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Flip Whatsapp
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavForLoginSignUpMob;
