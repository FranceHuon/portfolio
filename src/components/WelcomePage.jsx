import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WelcomePage() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="custom-h1">FRANCE HUON</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="custom-h2">DÉVELOPPEUSE</h2>
                    <h2 className="custom-h2">FULL-STACK</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="custom-h3">// OPEN TO WORK</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default WelcomePage;