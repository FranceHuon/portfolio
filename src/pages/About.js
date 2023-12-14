import React from 'react';
import PresentationTextComponent from '../components/AboutComponent';
import NavBar from '../components/NavBar';

function About() {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <main>
                <PresentationTextComponent />
            </main>
        </div>
    );
}

export default About;