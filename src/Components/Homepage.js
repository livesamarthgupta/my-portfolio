import React from "react";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
import Typewriter from 'typewriter-effect';

import avatar from "../assets/avatar.png"
import "./Homepage.css";

const Homepage = () => {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
      
        <Row className="justify-content-center py-5 align-center">
        
          <Col md={8} sm={12} >
            <h1 className="display-1 font-weight-bolder">
              Hi, I'm Samarth Gupta
            </h1>
            <h3 className="display-4 font-weight-light">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(`I'm a Software Engineer.`)
                    .deleteChars(18)
                    .typeString(`Technical Blogger.`)
                    .deleteChars(18)
                    .typeString(`Mentor.`)
                    .start();
                }}

                options={{
                  loop: true,
                  skipAddStyles: true
                }}
              />
            </h3>
            <br />

            <a
              href="https://www.instagram.com/livesamarthgupta/"
              target="_blank"
              rel="noopener noreferrer"
            ><i class="fa fa-instagram fa-2x" ></i></a>
            <a
              href="https://twitter.com/livesamarth"
              target="_blank"
              rel="noopener noreferrer"
            ><i class="fa fa-twitter fa-2x" ></i></a>
            <a
              href="https://www.facebook.com/livesamarthgupta"
              target="_blank"
              rel="noopener noreferrer"
            ><i class="fa fa-facebook fa-2x" ></i></a>
            <a
              href="https://www.linkedin.com/in/livesamarthgupta/"
              target="_blank"
              rel="noopener noreferrer"
            ><i class="fa fa-linkedin fa-2x" ></i></a>
            <a
              href="https://github.com/livesamarthgupta"
              target="_blank"
              rel="noopener noreferrer"
            ><i class="fa fa-github fa-2x" ></i></a>
          </Col>

          <div className="d-inline ">
              <Image
                src={avatar}
                fluid
                width="450"
                height="450"
                className="m-3 "
              />
          </div>
        </Row>
        
      </Container>
    </Jumbotron>
  );
};

export default Homepage;
