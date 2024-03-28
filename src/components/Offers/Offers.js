
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import offer1 from "../../images/cafe-discount-voucher.jpg"
import offer2 from "../../images/cafe-combo-offer.jpg"
import "./index.css"

export default function Offers() {
  return (
    <div className='offers-section'>
        <div className="offer1">
            <h1>Our Special Offers</h1>
            <p>Explore our tempting offers that make dining at The Cafe Evening even more delightful. Indulge in exquisite dishes with exclusive discounts and promotions.</p>
            <img src={offer1} className='offer-img' />
        </div>
        <div data-aos='fade-up'>
            <img src={offer2} className='offer-img' />
        </div>
    </div>
  )
}

AOS.init();
