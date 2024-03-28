import React from 'react'
import { useState } from "react"
import './Footer.css'

const Footer = () => {

    var currentYear = new Date().getFullYear();


    return (
        <section className="footer">
            <div className="footer__content">

                <ul className="fnav__list grid">
                    <li className="fnav__item">
                        <a href="/" className="fnav__link active-link">
                            Home</a>
                    </li>

                    <li className="fnav__item">
                        <a href="/menu" className="fnav__link">
                            Menu
                        </a>
                    </li>

                    <li className="fnav__item">
                        <a href="/about" className="fnav__link">
                            About
                        </a>
                    </li>

                    <li className="fnav__item">
                        <a href="/contact" className="fnav__link">
                            Contact
                        </a>
                    </li>

                    <li className="fnav__item">
                        <a href="/gallery" className="fnav__link">
                            Gallery
                        </a>
                    </li>
                </ul>
                <hr />
                <p>&copy; {currentYear} The Cafe Evening. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer;