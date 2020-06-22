import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">LEETING LOGS</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/problems" className="nav-link">Problems</Link>
          </li>
          <li className="navbar-item">
          <Link to="/log-problem" className="nav-link">Log Problem</Link>
          </li>
          <li className="navbar-item">
          <Link to="/signup" className="nav-link">Sign Up</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
}

export default Navbar;
