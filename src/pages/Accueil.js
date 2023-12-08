import React from 'react';
import NavBar from '../components/NavBar';
import WelcomePage from '../components/WelcomePage';
import AboutComponent from '../components/AboutComponent';
import '../styles/WelcomePage.css';

function Accueil() {
    return (
        <div id="accueil">
            <div id="navBar">
                <NavBar />
            </div>
            <div id="intro">
                <WelcomePage />
            </div>
            <div id="textePresentation">
                <AboutComponent />
            </div>
        </div>


    );
}

export default Accueil;

