import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";  // You can style it separately with this file

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/companies">Companies</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
