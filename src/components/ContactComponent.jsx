import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Contact.css';

function Columns() {
    return (
        <Container>
            <Row>
                <Col className='key'>
                    <div id='placeKey'><h2 className="custom-h2 ligne-horizontale">LIEU</h2></div>
                    {/* <div className="ligne-horizontale"></div> */}
                    <div id='phoneKey'><h2 className="custom-h2 ligne-horizontale">EMAIL</h2></div>
                   
                    <div id='emailKey'><h2 className="custom-h2 ligne-horizontale">TÉLÉPHONE</h2></div>
                    
                    <div id='linkedinKey'><h2 className="custom-h2 ligne-horizontale">LINKEDIN</h2></div>
                    
                    <div id='GitHubKey'><h2 className="custom-h2 ligne-horizontale">GITHUB</h2></div>
                </Col>
                <Col className='value'>
                    <div id='placeValue'><h2 className="custom-h2 ligne-horizontale">NANTES</h2></div>
                   
                    <div id='emailValue'><h2 className="custom-h2 ligne-horizontale">FRANCEHUON@GMAIL.COM</h2></div>
                    
                    <div id='phoneValue' className="ligne-horizontale"><h2 className="custom-h2 ligne-horizontale">06 09 36 12 96</h2></div>
                    
                    <div id='linkedinValue'className="ligne-horizontale"><h2 className="custom-h2 ligne-horizontale">LINKEDIN/IN/FRANCEHUON</h2></div>
                  
                    <div id='GitHubValue' className="ligne-horizontale"><h2 className="custom-h2 ">GITHUB/FRANCEHUON</h2></div>
                </Col>
            </Row>
            <dl class="row">
                <dt class="col-2">
                Lieu
                </dt>
                <dd class="col-10">
                Nantes
                </dd>
                <dt class="col-2">
                Email
                </dt>
                <dd class="col-10">
                francehuon@gmail.com
                </dd>
                <dt class="col-2">
                Téléphone
                </dt>
                <dd class="col-10">
                06 09 36 12 96
                </dd>
                <dt class="col-2">
                Linkedin
                </dt>
                <dd class="col-10">
                LINKEDIN/IN/FRANCEHUON
                </dd>
                <dt class="col-2">
                    GitHub
                </dt>
                <dd class="col-10">
                GITHUB/FRANCEHUON
                </dd>
            </dl>
        </Container>
    );
}

export default Columns;