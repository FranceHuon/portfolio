import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import projectsData from './ProjectsData';
import '../styles/ProjetCard.css';


function ProjetCard() {
  return (
    <Container className="ProjetCardContainer">
    <Row xs={1} md={2} className="g-4">
      {projectsData.map((project, idx) => (
        <Col key={idx}>
          <Card className='ProjetCardStyle'>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default ProjetCard;


