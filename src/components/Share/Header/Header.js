import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import logo from "../../../images/logo/logo.png";
import CustomLink from "../CustomLink/CustomLink";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSingOut = () => {
    signOut(auth);
  };
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="light"
      
    >
      <Container>
        <Navbar.Brand as={CustomLink} to="/">
          <img src={logo} height="30px" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {user && (
              <>
                
                <Nav.Link as={CustomLink} to="/additem">
                  Add Item
                </Nav.Link>
                <Nav.Link as={CustomLink} to="/myadditem">
                  Total items
                </Nav.Link>
                <Nav.Link as={CustomLink} to="/myitem">
                  My items
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            <Nav.Link as={CustomLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/blog">
              Blog
            </Nav.Link>
            {user ? (
              <button
                className="btn btn-link text-danger text-decoration-none"
                onClick={handleSingOut}
              >
                Sing Out
              </button>
            ) : (
              <Nav.Link eventKey={2} as={CustomLink} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
