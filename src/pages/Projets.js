import React from 'react';
import ProjectsContainer from "../components/ProjectsContainer";
import NavBar from "../components/NavBar";

function Projets() {
    return (
        <div id="pageProjets" className="pro">
            <div id="navBar">
                <NavBar />
            </div>

            <div id="projets">
                    <ProjectsContainer />     
            </div>
        </div>
    );
}
export default Projets;




