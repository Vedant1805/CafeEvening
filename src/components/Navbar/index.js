import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./index.css"

export const Navbar = () => {
    const [Toogle, showMenu] = useState(false);

    const [highlightChange, SethighlightChange] = useState(false);
    const changeHighlight = () => {
        if (window.scrollY >= 750) SethighlightChange(true);
        else SethighlightChange(false);
    }
    window.addEventListener("scroll", changeHighlight);

    return (
        <header className={highlightChange ? "header-colorchange" : "header"} >
            <nav className={highlightChange ? "nav-change" : "nav"} id='nav'  >
                <a href="/" className="nav__logo" style={{ color: 'black' }}>CAFE<span> EVENING</span></a>

                <div className={Toogle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">

                        <li type="none" className="nav__item " ><Link to="/" className="nav__link active-link">Home</Link></li>

                        <li type="none" className="nav__item " ><Link to="/menu" className="nav__link active-link">Menu</Link></li>

                        <li type="none" className="nav__item " ><Link to="/about" className="nav__link active-link">About</Link></li>

                        <li type="none" className="nav__item " ><Link to="/contact" className="nav__link active-link">Contact</Link></li>

                        <li type="none" className="nav__item " ><Link to="/gallery" className="nav__link active-link">Gallery</Link></li>

                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toogle)}></i>
                </div>

                <div className="nav_toogle" onClick={() => showMenu(!Toogle)}>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header >
    )
}

