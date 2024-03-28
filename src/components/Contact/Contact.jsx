import React from 'react'
import { useState } from 'react'
import { Navbar } from "../Navbar"
import './Contact.css'
import contactbg from '../../images/contact-bg.jpg'
import ContactInfo from './ContactInfo'
import MapContainer from './MapContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {

    return (
        <section className="contact">
            <div className="upper">
                <Navbar />
                <div className="contact-bg">
                    <div className="bg-content">
                        {/* <h1>The Cafe Evening</h1> */}
                        <h1 style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '5rem' }}>Contact Us</h1>
                    </div>
                </div>
            </div>
            <ContactInfo />
            <MapContainer />
        </section>
    )
}

export default Contact