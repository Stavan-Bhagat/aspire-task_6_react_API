import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">ShoppingSite</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>
              {" "}
              <Link to="/" className="link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/about" className="link">
                About Us
              </Link>
            </Nav.Link>

            <Nav.Link>
              {" "}
              <Link to="/contact" className="link">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
