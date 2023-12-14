import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function ContactFormComponent() {
  return (

    <Container className='custom-container'>
      <Row>
        <Col md={6} xs={12}>
          <h1 className='custom-h1'>Let's work together</h1>
        </Col>

        <Col md={6} xs={12}>
          <Form className='custom-form'> 
            <Form.Group controlId="formGridName">
              <Form.Label className='custom-h2' >What is your name ?</Form.Label>
              <Form.Control className='custom-input' type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label className='custom-h2'>What is your email ?</Form.Label>
              <Form.Control className='custom-input' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formGridMessage">
              <Form.Label className='custom-h2'>Your message :)</Form.Label>
              <Form.Control as='textarea' className='custom-input' type="text" placeholder="Enter message" />
            </Form.Group>

            <Button className='button-style' type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactFormComponent;




