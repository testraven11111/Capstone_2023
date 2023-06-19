import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h2>Forep</h2>
        </div>
        <div className="links">
          <Link className="link" to="/">
            <h6>HOME</h6>
          </Link>
          <Link className="link" to="/resep">
            <h6>RESEP</h6>
          </Link>
          <Link className="link" to="/upload">
            <h6>UPLOAD</h6>
          </Link>
          <Link className="link" to="/about">
            <h6>ABOUT US</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
