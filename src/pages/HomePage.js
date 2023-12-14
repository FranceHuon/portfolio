import React from 'react';
import NavBar from '../components/NavBar';
import HomePage from '../components/HomePage';

function Home() {
    return (
        <div id="accueil">
            <div id="navBar">
                <NavBar />
            </div>
            <div id="intro">
                <HomePage />
            </div>
        </div>


    );
}

export default Home;

