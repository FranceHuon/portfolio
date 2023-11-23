import React from 'react';
import ProjetCard from "../components/ProjetCard";
import NavBar from "../components/NavBar";

function Projets() {
    return (
        <div id="pageProjets">
            <div id="navBar">
                <NavBar />
            </div>

            <div id="projets">
                    <ProjetCard />     
            </div>
        </div>
    );
}
export default Projets;




