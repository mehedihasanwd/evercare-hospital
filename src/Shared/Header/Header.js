import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useFirebase from "../../Hooks/useFirebase";

const Header = () => {
  const { user, logOut } = useFirebase();
  console.log(user);
  return (
    <>
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          sticky="top"
        >
          <Container>
            <Navbar.Brand href="/home">
              EVERCARE<span className="text-primary">HOSPITAL</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="mx-1 justify-content-end">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>

              {user?.email ? (
                <button
                  onClick={logOut}
                  className="btn-primary border-0 me-3 rounded-1"
                >
                  Log Out
                </button>
              ) : (
                <Nav.Link as={HashLink} to="/login">
                  Login
                </Nav.Link>
              )}

              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>

              <Nav.Link className="text-warning" eventKey={2}>
                <span className="me-2 text-white">Signed in as:</span>
                {user?.displayName ? user?.displayName : user?.email}
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </>
  );
};

export default Header;
