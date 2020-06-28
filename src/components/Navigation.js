import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  const [login, setLogin] = useState(
    <Navbar.Text>
      <a href="/signup">Sign Up</a>
    </Navbar.Text>
  );
  const [user, setUser] = useState({});

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      setUser(currentUser);
      setLogin(
        <Navbar.Text>
          Signed in as: <a href="#login">{currentUser.displayName}</a>
        </Navbar.Text>
      );
    }
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">LEETING LOGS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/problems">Problems</Nav.Link>
          <Nav.Link href="/analytics">Analytics</Nav.Link>
          <Nav.Link href="/calendar">Calendar</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/signup">Sign Up</a>
          </Navbar.Text>

          <Navbar.Text>{user.displayName}</Navbar.Text>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
    // <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    //   <Link to="/" className="navbar-brand">
    //     LEETING LOGS
    //   </Link>
    //   <div className="collpase navbar-collapse">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="navbar-item">
    //         <Link to="/problems" className="nav-link">
    //           Problems
    //         </Link>
    //       </li>
    //       <li className="navbar-item">
    //         <Link to="/log-problem" className="nav-link">
    //           Log Problem
    //         </Link>
    //       </li>
    //       <li className="navbar-item">
    //         <Link to="/analytics" className="nav-link">
    //           Analytics
    //         </Link>
    //       </li>
    //       <li className="navbar-item">
    //         <Link to="/signup" className="nav-link">
    //           Sign Up
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Navigation;
