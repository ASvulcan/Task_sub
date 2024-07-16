import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import logo from '../asset/logo2.png'; // adjust the path as needed

function Header() {
  return (
    <>
      <Container className="mt-3">
        <Row className="align-items-center">
          <Col md="auto">
            <img
              src={logo}
              className="navbar-logo"
              alt="HANSA FLEX logo"
            />
          </Col>
          <Col className="text-right">
            <Nav>
              <Nav.Link href="#english">English (India)</Nav.Link>
              <Nav.Link href="#store-finder">Store finder</Nav.Link>
              <Nav.Link href="#help-contact">Help & contact</Nav.Link>
              <Nav.Link href="#Login">Login</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
      <Navbar bg="light" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#about">About us</Nav.Link>
            </Nav>
            <Form inline className="ml-auto">
              <FormControl type="text" placeholder="Enter search term" className="mr-sm-2" />
              <Button className = "btn1"variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
