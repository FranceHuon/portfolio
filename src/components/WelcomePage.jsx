import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/WelcomePage.css';

function WelcomePage() {
    return (
        <Container className='intro'>
            <Row>
                <Col className="name">
                    <h1 className="custom-h1">FRANCE HUON</h1>
                </Col>
            </Row>
            <Row>
                <Col className="profession">
                    <h1 className="custom-h1">DÉVELOPPEUSE</h1>
                    <h1 className="custom-h1">FULL-STACK</h1>
                </Col>
            </Row>
            <Row>
                <Col className ="openToWork">
                    <h2 className="custom-h2">// OPEN TO WORK</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default WelcomePage;

