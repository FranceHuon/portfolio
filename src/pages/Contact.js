import React from 'react';
import NavBar from "../components/NavBar";
import ContactComponent from '../components/ContactComponent';

function Contact() {
    return (
        <div id="pageContact">
            <div id="navBar">
                <NavBar />
            </div>
            <main>
                <ContactComponent />
            </main>
        </div>
    )
}
export default Contact;