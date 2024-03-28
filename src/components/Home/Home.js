import AOS from 'aos'
import 'aos/dist/aos.css'
import { Navbar } from "../Navbar"
import banner1 from "../../images/main-bg1.jpg"
import banner3 from "../../images/banner3.jpg"
import banner2 from "../../images/banner-2.jpg"
import welcomebanner from "../../images/welcome-image.jpg"
import "./index.css"
import { useState } from "react"
import Welcome from "../Welcome/Welcome"
import Offers from "../Offers/Offers"
import InnerBanner from "../InnerBanner/InnerBanner"



export const Home = () => {

  return (

    <div className="home-container">
      <Navbar />
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item banner1 active">

            <img src={banner3} className="d-block w-100 main-img" alt="..." />
            <div class="carousel-caption main-text">
             
              <p>Cafe Comforts, Culinary Delights.</p>
            </div>
          </div>
          <div className="carousel-item banner1">

            <img src={banner2} className="d-block w-100 h-80 main-img" alt="..." />
            <div class="carousel-caption sec-text">
              <p>Taste the Extraordinary</p>
              
            </div>
          </div>
          <div className="carousel-item banner1">

            <img src={banner1} className="d-block w-100 main-img" alt="..." />
            <div class="carousel-caption ter-text">
              <p>A Symphony of Coffee and Cuisine.</p>
            </div>
          </div>
          
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon " aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Welcome/>
      <InnerBanner/>
      <Offers/>
      

    </div>
  );

}

AOS.init();




