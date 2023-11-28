import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PresentationTextComponent() {
  return (
    <Container fluid>
      <Row>
        <Col className="textePresentation">
                <p className="custom-p">Je suis apprenante à Ada Tech School depuis mai 2023.
                    C'est une école d'informatique inclusive avec une pédagogie par le faire. J’apprends à coder de manière autonome et responsable tout en favorisant la collaboration et l’entraide
                    grâce à des projets collectifs.
                </p>
            </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default PresentationTextComponent;