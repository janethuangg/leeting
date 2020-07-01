import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { AuthContext } from "../auth.js";

const Navigation = () => {
  const [login, setLogin] = useState(
    <Navbar.Text>
      <a href="/signup">Sign Up</a>
    </Navbar.Text>
  );

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      setLogin(
        <Navbar.Text>Signed in as: {currentUser.displayName}</Navbar.Text>
      );
    }
  }, []);

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="/">LEETING LOGS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/problems">Problems</Nav.Link>
          <Nav.Link href="/log-problem">Log Problem</Nav.Link>
          <Nav.Link href="/analytics">Analytics</Nav.Link>
          <Nav.Link href="/calendar">Calendar</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          {login}
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
