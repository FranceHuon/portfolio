import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Contact.css';

function Columns() {
    return (
        <Container>
            <Row>
                <Col className='key'>
                    <div id='placeKey'><h2 className="custom-h2">LIEU</h2></div>
                    <div className="ligne-horizontale"></div>
                    <div id='phoneKey'><h2 className="custom-h2">EMAIL</h2></div>
                    <div className="ligne-horizontale"></div>
                    <div id='emailKey'><h2 className="custom-h2">TÉLÉPHONE</h2></div>
                    <div className="ligne-horizontale"></div>
                    <div id='linkedinKey'><h2 className="custom-h2">LINKEDIN</h2></div>
                    <div className="ligne-horizontale"></div>
                    <div id='GitHubKey'><h2 className="custom-h2">GITHUB</h2></div>
                </Col>
                <Col className='value'>
                    <div id='placeValue'><h2 className="custom-h2">NANTES</h2></div>
                    <div className="ligne-horizontale"></div>
                    <div id='phoneValue'><h2 className="custom-h2">06 09 36 12 96</h2></div>
                    <div className="ligne-horizontale"></div>
                    <div id='emailValue'><h2 className="custom-h2">FRANCEHUON@GMAIL.COM</h2></div>
                    <div className="ligne-horizontale"></div>
                    <div id='linkedinValue'><h2 className="custom-h2">LINKEDIN/IN/FRANCEHUON</h2></div>
                    <div className="ligne-horizontale"></div>
                    <div id='GitHubValue'><h2 className="custom-h2">GITHUB/FRANCEHUON</h2></div>
                </Col>
            </Row>
        </Container>
    );
}

export default Columns;