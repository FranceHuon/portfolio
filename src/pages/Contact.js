import ButtonContact from '../components/ButtonContact';
import React from 'react';
import NavBar from "../components/NavBar";

function Contact() {
    return (
        <div id="pageContact" style={{ display: 'flex', flexDirection: 'column' }}>
            <div id="navBar">
                <NavBar />
            </div>
            <div id="informations" style={{ display: 'flex', flexDirection: 'column' }}>

                <div className="ligne-horizontale"></div>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p className="custom-p">LIEU</p>
                    <h4 className="custom-h4">NANTES</h4>
                </div>

                <div className="ligne-horizontale"></div>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p className="custom-p">EMAIL</p>
                    <h4 className="custom-h4">FRANCEHUON@GMAIL.COM</h4>
                </div>

                <div className="ligne-horizontale"></div>

                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <p className="custom-p">TÉLÉPHONE</p>
                    <h4 className="custom-h4">06 09 36 12 96</h4>
                </div>

                <div className="ligne-horizontale"></div>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p className="custom-p">LINKEDIN</p>
                    <h4 className="custom-h4">LINKEDIN/IN/FRANCEHDK</h4>
                </div>
            </div>
            <div id="contact">
                <ButtonContact />
            </div>
        </div>
    )
}
export default Contact;