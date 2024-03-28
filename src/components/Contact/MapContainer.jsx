import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const MapContainer = () => {

  return (
    <div className='contact-map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396.5302053535571!2d73.97852592984931!3d18.574769410785116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3e11afd3c31%3A0x4e7e208a6fee82b5!2sThe%20Caf%C3%A9%20Evening!5e1!3m2!1sen!2sin!4v1710154719415!5m2!1sen!2sin" width="100%" height="550" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
export default MapContainer;
