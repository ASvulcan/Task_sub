import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Services.css'; // Create and import your CSS file for custom styling if needed

const services = [
  {
    title: 'Hose management',
    image: '/logo2.png', // Update the path to your image
    description: 'Plan inspections efficiently and perform them professionally.',
  },
  {
    title: 'Mobile Rapid Hydraulic Service',
    image: '/logo2.png', // Update the path to your image
    description: 'Get help within an hour and minimise downtimes.',
  },
  {
    title: 'Inspections of industrial hose lines',
    image: '/logo2.png', // Update the path to your image
    description: 'Inspect your industrial hose lines in accordance with the German Industrial Health and Safety Act (BetrSichV).',
  },
  {
    title: 'Fluid Service',
    image: '/logo2.png', // Update the path to your image
    description: 'Our fluid technology experts advise and assist you on all aspects of oil care.',
  },
];

function Services() {
  return (
    <Container className="my-5">
      <h2 className="text-center">OUR SERVICES</h2>
      <p className="text-center">
        The best from over 60 years of experience with hydraulic components.
      </p>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src={service.image} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
