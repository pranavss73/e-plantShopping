import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2 className="about-us-heading">About Us</h2>
      <p className="about-us-tagline">Where Green Meets Serenity</p>
      <p className="about-us-description">
        Welcome to <strong>Paradise Nursery</strong>, your premier destination for carefully curated, vibrant houseplants. 
        We are passionate about transforming living spaces into tranquil green sanctuaries that promote wellness, tranquility, and mindful living.
      </p>
      <p className="about-us-content">
        At Paradise Nursery, we believe that bringing nature indoors enriches lives. Our mission is to provide a diverse selection of 
        high-quality plants—from air-purifying varieties that cleanse indoor air to aromatic herbs that delight the senses and hardy succulents 
        that thrive with minimal care.
      </p>
      <p className="about-us-content">
        Every plant in our greenhouse is nurtured with love and inspected to ensure optimal health. Whether you are a beginner looking for 
        your very first houseplant or a seasoned plant parent expanding your indoor jungle, Paradise Nursery is here to support your green journey.
      </p>
    </div>
  );
}

export default AboutUs;
