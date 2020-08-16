import React from "react";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";

import reactpng from "../assets/react.png";
import springpng from "../assets/spring.png";
import reduxpng from "../assets/redux.jpg";
import mysqlpng from "../assets/mysql.png";
import "./Homepage.css";

const Homepage = () => {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            <h1 className="display-1 font-weight-bolder">
              Hi, I'm Samarth Gupta
            </h1>
            <h3 className="display-4 font-weight-light">
              I'm a full stack developer.
            </h3>
            <br />
            <Image
              src={reactpng}
              roundedCircle
              width="171"
              height="180"
              className="m-3"
            />
            <Image
              src={reduxpng}
              roundedCircle
              width="171"
              height="180"
              className="m-3"
            />
            <Image
              src={springpng}
              roundedCircle
              width="171"
              height="180"
              className="m-3"
            />
            <Image
              src={mysqlpng}
              roundedCircle
              width="171"
              height="180"
              className="m-3"
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Homepage;
