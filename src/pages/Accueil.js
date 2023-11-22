import React from 'react';
import NavBar from '../components/NavBar';
import PresentationCard from '../components/PresentationCard';

function Accueil() {
    
    return (
        <div id="accueil">
            <div id="navBar">
                <NavBar />
            </div>
            <div id="presentation">
                <h1 className="custom-h1">FRANCE HUON</h1>
                <h2 className="custom-h2">DÉVELOPPEUSE</h2>
                <h2 className="custom-h2">FULL-STACK</h2>
                <h3 className="custom-h3">// OPEN TO WORK</h3>
            </div>
            <div id='textePresentation'>
            <p className="custom-pv2">Je suis apprenante chez Ada Tech School,
            <br></br>
            école d’informatique inclusive à la pédagogie alternative par le faire.
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
            <div id='cv'>
            
            </div>
        </div>
    );
}

export default Accueil