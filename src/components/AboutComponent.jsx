import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/App.css';
import '../styles/Fonts.css';

function AboutComponent() {
  return (
    <Container className='custom-container'>
      <Row>
        <Col>
          <h1 className='custom-h1'>Know a little about me</h1>
        </Col>
        <Col className='textPresentation'><p className='custom-p'>
          I have been a developer student since May 2023, currently studying at Ada Tech School, an inclusive computer science school with a learning by doing pedagogy.</p> 
          <p className='custom-p'>I am working with a variety of languages, frameworks and tools. I am learning to code independently and responsibly while emphasizing collaboration and mutual assistance through collective projects using Agile methodology.</p>
          <p className='custom-p'>I am looking for a 12 months apprenticeship in Nantes or Brest starting on March 2024.
          My goal is to become a front-end developer, and I am particularly interested in training to create responsible, inclusive, and accessible user interfaces.</p>
        </Col>
      </Row>
    </Container >
  );
}

export default AboutComponent;

