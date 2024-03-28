import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css';
import { Navbar } from '../Navbar';

const gallery = [
  { id: 1, imageUrl: 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1710053517/gallery-h2_nmgutu.jpg' },
  { id: 2, imageUrl: 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1710053518/gallery-h1_d3fkie.jpg' },
  { id: 3, imageUrl: 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1710053517/gallery-h3_nh7eqk.jpg' },
  { id: 4, imageUrl: 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1710053519/galllery-v3_pmqmw8.jpg' },
  { id: 5, imageUrl: 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1710053518/gallery-v1_v4uduy.jpg' },
  { id: 6, imageUrl: 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1710053520/gallery-v4_opskq0.jpg' },
  
];

export function Gallery() {
  return (
    <div>
      <div className='home-container'>
        <Navbar />
        <div className='gallery-bg'>
          <h1 style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '5rem' }}>Gallery</h1>
        </div>
      </div>
      <div className='img-list'>
        {gallery.map((each) => (
          <img key={each.id} src={each.imageUrl} alt={`Image ${each.id}`} data-aos='fade-up'/>
        ))}
      </div>
    </div>
  );
}
