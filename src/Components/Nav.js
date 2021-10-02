import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Nav.css";

const Navigation = () => {
  return (
    <Navbar className=" p-3 mb-5 bg-white rounded" expand="lg">
      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle" className="justify-content-md-center">
        <Nav className="d-flex justify-content-center">
          <Link className="nav-link" to="/">
            <p className="h5 ml-2 mr-2">Home</p>
          </Link>
          <Link className="nav-link" to="/projects">
            <p className="h5 ml-2 mr-2">Projects</p>
          </Link>
          <Link className="nav-link" to="/about">
            <p className="h5 ml-2 mr-2">About</p>
          </Link>
          <Link className="nav-link" to="/contact">
            <p className="h5 ml-2 mr-2">Contact</p>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
