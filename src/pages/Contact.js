import React from 'react';
import NavBar from "../components/NavBar";
import ContactFormComponent from '../components/ContactFormComponent';

function Contact() {
    return (
        <div id="pageContact">
            <div id="navBar">
                <NavBar />
            </div>
            <main>
                <ContactFormComponent />
            </main>
        </div>
    )
}
export default Contact;