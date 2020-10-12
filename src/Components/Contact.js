import React from "react";
import { Form, Button, Container, Row, Col, Jumbotron } from "react-bootstrap";
import emailjs from 'emailjs-com';

import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      disabled: true,
    });

    emailjs.sendForm('service_tbbtf3y', 'samarth_portfolio_id', event.target, 'user_kq7UjDTmkAp7O1qOI7QPx')
      .then((result) => {
        console.log(result);
          this.setState({
            disabled: true,
            emailSent: true,
            name: "",
            email: "",
            message: ""
          });
      }, (error) => {
          console.log(error);
          this.setState({
          disabled: false,
          emailSent: false,
        });
      });

    
  };

  render() {
    return (
      <div className="ui container contact">
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
          <Container fluid={true}>
            <Row className="justify-content-center">
              <Col md={8} sm={12}>
                <h1 className="display-3 font-weight-light">Let's Talk:</h1>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container fluid={true}>
          <Row className="justify-content-center">
            <Col md={8}>
              <Form onSubmit={this.handleSubmit} method="POST">
                <Form.Group>
                  <Form.Label htmlFor="full-name">Full Name</Form.Label>
                  <Form.Control
                    id="full-name"
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    id="email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <Form.Control
                    id="message"
                    name="message"
                    as="textarea"
                    rows="8"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Button
                  className="d-inline-block "
                  variant="btn btn-outline-dark"
                  type="submit"
                  disabled={this.state.disabled}
                >
                   {this.state.emailSent ? "Message Sent" : "Send"}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
