import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/App.css';
import '../styles/Fonts.css';

function HomePage() {
    return (
        <Container className='custom-container'>
            <Row className='mb-5'>
                <Col>
                    <h1 className='custom-h1'>France Huon</h1>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col>
                    <h1 className='custom-h1 profesion'>front-end</h1>
                    <h1 className='custom-h1 profesion'>developer</h1>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col></Col>
                <Col>
                <h2 className='custom-h2'>open to work</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;
