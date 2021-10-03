import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "../Components/Nav";
import Homepage from "../Components/Homepage";

import "./App.css";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Projects from "../Components/Projects";
import Blogs from "../Components/Blogs";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Container fluid={true} className="p-0">
          <Navbar />
          <Route path="/" exact component={Homepage} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/contact" component={Contact} />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
