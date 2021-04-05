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
      disabled: true,
      emailSent: false,
      error: false
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    
    if(this.state.name.length > 0 && this.state.email.length > 0 && this.state.message.length > 0)
      this.setState({ disabled: false });
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
            emailSent: true,
            name: "",
            email: "",
            message: ""
          });
      }, (error) => {
          console.log(error);
          this.setState({
          emailSent: false,
          error: true
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
                  <Form.Label htmlFor="full-name">Your Name</Form.Label>
                  <Form.Control
                    id="full-name"
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="email">Your Email</Form.Label>
                  <Form.Control
                    id="email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="message">What do you wanna say?</Form.Label>
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
                   {this.state.emailSent && !this.state.error ? "Message Sent" : (!this.state.emailSent && this.state.error ? "Something went wrong!" : "Send")}
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
