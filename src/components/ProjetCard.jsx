import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../App.css';
import projectsData from './ProjectsData';

function ProjetCard() {
  return (
    <Row xs={1} md={2} className="g-4">
      {projectsData.map((project, idx) => (
        <Col key={idx}>
          <Card className='cardStyle'>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProjetCard;


