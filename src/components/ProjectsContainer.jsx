import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import '../styles/App.css';
import '../styles/Fonts.css';

function ProjectsContainer() {
  return (
        <Container className='custom-container'>
          <Row><h1 className='custom-h1'>Projects</h1></Row>
          <Row>
            <Col className='mb-5'><h2 className='custom-h2'>Plateforme de micro-blogging</h2><p className='custom-p '>Plateforme de micro-blogging de photos. Utilisation de PHP avec Laravel, découverte du moteur de templating Blade, utilisation de PostegreSQL. Technos et outils : Laravel, PostgreSQL, Blade, Breeze, PHP</p></Col>
            <Col className='mb-5'><h2 className='custom-h2'>Plateforme de vente de meubles - Consonéa</h2><p className='custom-p'>Plateforme de vente de meubles. Utilisation de React-Bootstrap, Express, MySQL. Technos et outils : React-Bootstrap, JavaScript, HTML, CSS, Trello, Postman</p></Col>
          </Row>
          <Row>
            <Col className='mb-5'><h2 className='custom-h2'>Réseau social PHP</h2><p className='custom-p'>Départ d\'un code pré-existant en PHP. Apprentissage du SQL, utilisation de MySQL, de PHP et de MAMP. Technos et outils : PHP, phpMyAdmin, MySQL</p></Col>
            <Col className='mb-5'><h2 className='custom-h2'>Extension de navigateur - DayByDay</h2><p className='custom-p'>Création d\'une extension de navigateur web qui affiche les anniversaires de nos proches, génère un fait historique en anglais et permet sa traduction en français. Création d\'une base de données avec Supabase, utilisation d\'Api. Technos et outils : Trello, JavaScript, CSS, HTLM</p></Col>
          </Row>
          <Row>
            <Col className='mb-5'><h2 className='custom-h2'>Dataviz & API - Trucs à faire sur Nantes</h2><p className='custom-p'>filtre des évènements selon leurs types et leurs dates, affichage des données sur une carte générée par Open Street Map.technos:JavaScript, CSS, HTLM, API</p></Col>
            <Col className='mb-5'><h2 className='custom-h2'>Pico-8</h2><p className='custom-p'>Découverte du langage Lua en groupe de 3 personnes. Création d\'un jeu vidéo en 2D grâce à l\'outil Pico-8</p></Col>
          </Row>
        </Container>
      );
    }

export default ProjectsContainer;

