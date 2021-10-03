import React from "react";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
import Typewriter from 'typewriter-effect';

import avatar from "../assets/avatar.png"
import "./Homepage.css";

import Data from "../data/homepage.json"

const Homepage = () => {

  const icons = Data.links.map((item) => (
    <a href={item.link}
       target="_blank"
       rel="noopener noreferrer"
       key={item.link} >
      <i className={item.icon}/>
    </a>
  ));

  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
      
        <Row className="justify-content-center py-5 align-center">
        
          <Col md={8} sm={12} >
            <h1 className="display-1 font-weight-bolder">
              {Data.title}
            </h1>
            <h3 className="display-4 font-weight-light">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(Data.IAM)
                    .typeString(Data.role1)
                    .deleteChars(Data.role1.length)
                    .typeString(Data.role2)
                    .deleteChars(Data.role2.length)
                    .typeString(Data.role3)
                    .start();
                }}
                options={{
                  loop: true,
                  skipAddStyles: true
                }}
              />
            </h3>
            <br />
            {icons}
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
