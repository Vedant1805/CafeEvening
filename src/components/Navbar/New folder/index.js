import { useState } from "react"
import { Link } from "react-router-dom"

import "./index.css"
import logo from "../../images/cafe-logo.jpg"



export const Navbar = () => {



    const [highlightChange, SethighlightChange] = useState(false);
    const changeHighlight = () => {
        if (window.scrollY >= 730) SethighlightChange(true);
        else SethighlightChange(false);
    }
    window.addEventListener("scroll", changeHighlight);

    return (

        <div className={highlightChange ? "mycolor" : "navbar"}>
            <div >
                <h1 className="logo" style={highlightChange ? { color: 'white' } : null}>CAFE <span>EVENING</span></h1>
            </div>

            <ul className="nav-links">
                <li type="none"><Link style={highlightChange ? { color: 'white' } : null} to="/" className="link">Home</Link></li>
                <li type="none"><Link style={highlightChange ? { color: 'white' } : null} to="/menu" className="link">Menu</Link></li>
                <li type="none"><Link style={highlightChange ? { color: 'white' } : null} to="/about" className="link">About</Link></li>
                <li type="none"><Link style={highlightChange ? { color: 'white' } : null} to="/contact" className="link">Contact</Link></li>
                <li type="none"><Link style={highlightChange ? { color: 'white' } : null} to="/gallery" className="link">Gallery</Link></li>
            </ul>
        </div>

    );

}