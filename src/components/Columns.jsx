import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Columns() {
    return (
        <Container>
            <Row>
                <Col className='key'>
                    <div id='placeKey'><h4 className="custom-h4">LIEU</h4></div>
                    <div className="ligne-horizontale"></div>
                    <div id='phoneKey'><h4 className="custom-h4">EMAIL</h4></div>
                    <div className="ligne-horizontale"></div>
                    <div id='emailKey'><h4 className="custom-h4">TÉLÉPHONE</h4></div>
                    <div className="ligne-horizontale"></div>
                    <div id='linkedinKey'><h4 className="custom-h4">LINKEDIN</h4></div>
                    <div className="ligne-horizontale"></div>
                    <div id='GitHubKey'><h4 className="custom-h4">GITHUB</h4></div>
                </Col>
                <Col className='value'>
                    <div id='placeValue'><h4 className="custom-h4">NANTES</h4></div>
                    <div className="ligne-horizontale"></div>
                    <div id='phoneValue'><h4 className="custom-h4">06 09 36 12 96</h4></div>
                    <div className="ligne-horizontale"></div>
                    <div id='emailValue'><h4 className="custom-h4">FRANCEHUON@GMAIL.COM</h4></div>
                    <div className="ligne-horizontale"></div>
                    <div id='linkedinValue'><h4 className="custom-h4">LINKEDIN/IN/FRANCEHUON</h4></div>
                    <div id='GitHubValue'><h4 className="custom-h4">https://github.com/FranceHuon</h4></div>
                </Col>
            </Row>
        </Container>
    );
}

export default Columns;