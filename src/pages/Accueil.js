import React from 'react';
import NavBar from '../components/NavBar';
import ProjetCard from '../components/ProjetCard';
import Columns from '../components/Columns';
import WelcomePage from '../components/WelcomePage';

function Accueil() {
    return (
        <div id="accueil">
            <div id="navBar">
                <NavBar />
            </div>
            <div id="intro">
                <WelcomePage />
            </div>
            <div id='textePresentation'>
                <p className="custom-pv2">APPRENANTE À ADA TECH SCHOOL
                    <br></br>
                    ÉCOLE D'INFORMATIQUE INCLUSIVE
                    <br></br>
                    PÉDAGOGIE PAR LE FAIRE
                    <br></br>
                    J’apprends à coder de manière autonome et responsable
                    <br></br>
                    tout en favorisant la collaboration et l’entraide
                    <br></br>
                    grâce à des projets collectifs.
                    <br></br>
                    Dynamique, enthousiaste et positive,
                    <br></br>
                    j’ai à coeur de m’investir dans ce que j’entreprends
                    <br></br>
                    avec agilité et envie pour relever chaque nouveau défi !
                </p>
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

