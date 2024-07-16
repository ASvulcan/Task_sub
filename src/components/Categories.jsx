import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Categories.css'; // Create and import your CSS file for custom styling if needed

const categories = [
  {
    title: 'Hoses hydraulic',
    image: '/logo2.png', // Update the path to your image
    subtext: '3 Categories',
  },
  {
    title: 'Hoses Industrial',
    image: '/logo2.png', // Update the path to your image
    subtext: '3 Categories',
  },
  {
    title: 'Hose fittings',
    image: '/logo2.png', // Update the path to your image
    subtext: '11 Categories',
  },
  {
    title: 'Couplings',
    image: '/logo2.png', // Update the path to your image
    subtext: '7 Categories',
  },
  {
    title: 'Tube fittings ISO 8434-1',
    image: '/logo2.png', // Update the path to your image
    subtext: '14 Categories',
  },
  {
    title: 'Tubes',
    image: '/logo2.png', // Update the path to your image
    subtext: '2 Categories',
  },
];

function Categories() {
  return (
    <Container className="container1">
      <h2 className="text-center">OUR CATEGORIES</h2>
      <p className="text-center">
        Browse through our categories with over 60,000 available articles on the subject of hydraulics.
      </p>
      <Row>
        {categories.map((category, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={category.image} />
              <Card.Body>
                <Card.Title>{category.title}</Card.Title>
                <Card.Text>{category.subtext}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button variant="outline-primary">SHOW ALL</Button>
      </div>
    </Container>
  );
}

export default Categories;
