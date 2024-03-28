import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Map } from '@googlemaps/react-wrapper';

const ContactInfo = () => {
    return (
        <section className="contact-info">
            <div className="contact-left">
                <h1>Contact Us</h1>
                <p>Get in Touch with Us!

                    Have a question, suggestion, or just want to say hello? We'd love to hear from you! Feel free to drop us a line at
                    thecafeevening@gmail.com and we'll get back to you as soon as possible. Alternatively, you can reach out to us on social media. Your feedback is invaluable to us as we strive to create the best experience for our beloved customers.</p>
                <div className="restaurant">

                    <h1>The Cafe Evening</h1>
                    <p>RESTAURANT</p>
                </div>
            </div>
            <div className="contact-right">
                <div className="info-upper">
                    <div className="contact-heading">
                        <div className="address add-heading">
                            <h3>Address:</h3>
                            <a href="https://goo.gl/maps/qyU9UWhK5UYCN7328" target="_blank">
                                Baif Rd, Wagholi, Pune, Maharashtra 412207</a>
                        </div>
                        <div className="Phone add-heading">
                            <h3>Phone:</h3>
                            <a href='tel:7387882087'> +(91) 7387882087</a>
                        </div>
                        <div className="email add-heading">
                            <h3>Email:</h3>
                            <a href="mailto:thecafeevening@gmail.com" target="_blank">thecafeevening@gmail.com</a>
                        </div>
                    </div>

                    <div className="social">
                        <a href="https://www.instagram.com/thecafeevening?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100064168686089&mibextid=ZbWKwL" target='_blank'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://wa.me/7387882087" target='_blank'>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ContactInfo;