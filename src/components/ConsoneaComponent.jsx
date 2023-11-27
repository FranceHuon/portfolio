import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ConsoneaImage1 from '../images/Consonea_1.png';
import ConsoneaImage2 from '../images/Consonea_2.png';
import ConsoneaImage3 from '../images/Consonea_3.png';

function ConsoneaComponent() {
    return (
        <Container className='customContainer'>
            <Container>
            <Row>
                <Col className='title'>PROJET COLLECTIF : CONSONÉA</Col>
            </Row>
            <Row>
                <Col className='text'>Plateforme de vente de meubles</Col>
            </Row>
            </Container>
            <Container>
            <Row>
                <Col className='text'>Construction front et back, base de données, serveur et API.</Col>
                <Col><Image src={ConsoneaImage1} alt="Description de l'image" className="img-fluid" /></Col>
            </Row>
            </Container>
            
            <Row>
                <Col className='text'>React-Bootstrap MysSQL Node.js Express</Col>
                <Col><Image src={ConsoneaImage3} alt="Description de l'image" className="img-fluid" /></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col><Image src={ConsoneaImage2} alt="Description de l'image" className="img-fluid" /></Col>
            </Row>
        </Container>
    );
}

export default ConsoneaComponent;