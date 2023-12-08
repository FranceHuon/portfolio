import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Contact.css';
import '../styles/Fonts.css';

function ContactComponent() {
    return (
        <Container className='m-md-4 m-0'>
            <Row className='mb-5'>
                <Col md={6} xs={12}>
                    <h1 className='custom-h1'>Contact</h1>
                </Col>
                <Col md={6} xs={12}>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col md={6} xs={12}>
                    <section><h2 className='custom-h2'>Lieu : </h2></section>
                </Col>
                <Col md={6} xs={12}>
                    <section><h2 className='custom-h2'>Nantes / Brest</h2></section>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col md={6} xs={12}>
                    <section><h2 className='custom-h2'>Email : </h2></section>
                </Col>
                <Col md={6} xs={12}>
                    <section><h2 className='custom-h2 '>francehuon@gmail.com</h2></section>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col md={6} xs={12}>
                    <section><a href='https://www.linkedin.com/in/francehuon/' className='custom-a' aria-label='Profil Linkedin'><h2 className='custom-h2'>Linkedin</h2></a></section>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col md={6} xs={12}>
                    <section><a href='https://github.com/FranceHuon' className='custom-a' aria-label='Profil GitHub'><h2 className='custom-h2'>GitHub</h2></a></section>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactComponent;