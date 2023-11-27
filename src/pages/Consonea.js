import React from 'react';
import ConsoneaComponent from '../components/ConsoneaComponent';
import NavBar from '../components/NavBar';

function Consonea() {
    return (
        <div id='consoneaPage'>
            <div id='navBar'>
                <NavBar />
            </div>
            <div id='consonea'>
                <ConsoneaComponent />
            </div>
        </div>
    )
}

export default Consonea