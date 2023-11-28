import React from 'react';
import NavBar from '../components/NavBar';
import ProjetCard from '../components/ProjetCard';
import Columns from '../components/ContactComponent';
import WelcomePage from '../components/WelcomePage';
import PresentationTextComponent from '../components/PresentationTextComponent';

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
                <PresentationTextComponent />
            </div>
           
            <div id='projets'>
                <ProjetCard />
            </div>
            <div id='contact'>
                <Columns />
            </div>
        </div>


    );
}

export default Accueil;

