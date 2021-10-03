import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Nav.css";

import Data from "../data/nav.json"

const linkGenerator = (links) => {
  return links.map(link => (
    <Link className="nav-link" to={link.link} key={link.link}>
      <p className="h5 ml-2 mr-2">{link.pagename}</p>
    </Link>
  ))
}

const Navigation = () => {
  return (
    <Navbar className=" p-3 mb-5 bg-white rounded" expand="lg">
      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle" className="justify-content-md-center">
        <Nav className="d-flex justify-content-center">
          {linkGenerator(Data.links)}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
