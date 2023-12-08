import React from 'react';
import PresentationTextComponent from '../components/AboutComponent';
import NavBar from '../components/NavBar';
import '../styles/About.css';
import '../styles/App.css';
import '../styles/NavBar.css';

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