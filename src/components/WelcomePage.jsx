import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/WelcomePage.css';
import '../styles/Fonts.css';

function WelcomePage() {
    return (
        <Container className='intro'>
            <Row>
                <Col className="name">
                    <h1 className="custom-h1">France Huon</h1>
                </Col>
            </Row>
            <Row>
                <Col className="profession">
                    <h1 className="custom-h1">développeuse</h1>
                    <h1 className="custom-h1">full-stack</h1>
                </Col>
            </Row>
            <Row>
            </Row>
        </Container>
    );
}

export default WelcomePage;

