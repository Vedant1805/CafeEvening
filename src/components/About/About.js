import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useRef } from 'react';
import { Navbar } from '../Navbar'
import AboutCuisine from '../../images/about-image.jpg'
import CafeAbout from '../../images/cafe-about.jpg'
import OurTeam from '../../images/our-team.jpg'
import './index.css'

export function About() {

  const containerRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      containerRefs.current.forEach((containerRef) => {
        if (containerRef) {  // Added this check
          const containerTop = containerRef.getBoundingClientRect().top;
          if (containerTop < window.innerHeight - 100) {
            containerRef.classList.add('fade-in');
          }
        }
      });
    };
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check for elements in view
    handleScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='home-container'>
        <Navbar />
        <div className='about-bg'>
          <h1 style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '5rem' }}>About Us</h1>
        </div>

        <div class="container" ref={(ref) => (containerRefs.current[0] = ref)} data-aos='fade-down'>
          <div className="about-container">
            <div className='about-text'>
              <h2>About Our Cuisine</h2>
              <p>Discover the flavors of our carefully crafted dishes. From savory breakfasts to mouth-watering desserts, our cuisine is a journey for your taste buds. Our chefs bring passion and creativity to every plate, ensuring a delightful dining experience.</p>
              <p>Explore a menu inspired by both local and international culinary traditions. We source the finest ingredients to create dishes that are not only delicious but also showcase the diversity of flavors.</p>
            </div >
            <div >
              <img class="about-img" src={AboutCuisine} alt="Cuisine Image" />
            </div>

          </div>

        </div>

        <div class="container fade-in" ref={(ref) => (containerRefs.current[0] = ref)} data-aos='fade-down'>
          <div className="about-container">
            <div className='about-text'>
              <h2>Our Cozy Atmosphere</h2>

              <p>Experience the warmth of our cozy atmosphere. Whether you're catching up with friends or enjoying a solo moment, our cafe is designed to make you feel at home. Our welcoming ambiance, comfortable seating, and friendly staff create the perfect setting for relaxation.</p>
              <p>Sip on your favorite coffee, indulge in delectable treats, and let the soothing atmosphere be the backdrop to your memorable moments. We believe that a cozy environment enhances the overall dining experience, and we strive to provide just that.</p>
            </div>
            <img class="about-img" src={CafeAbout} alt="Atmosphere Image" />
          </div>
        </div>

        <div class="container fade-in" ref={(ref) => (containerRefs.current[0] = ref)} data-aos='fade-down'>
          <div className="about-container">
            <div className='about-text'>
              <h2>Meet Our Team</h2>

              <p>Our team is comprised of dedicated individuals who are passionate about providing exceptional service. From chefs creating culinary masterpieces to friendly servers ensuring your comfort, each team member plays a vital role in making your visit special.</p>
              <p>We take pride in our diverse team, bringing together talents from different backgrounds to create a unique and welcoming environment. Get to know the faces behind the scenes, and feel the warmth of our team's hospitality.</p>
            </div>
            <img class="about-img" src={OurTeam} alt="Atmosphere Image" />
          </div>
        </div>



      </div>
    </div>
  )
}
