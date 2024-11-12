import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './HeroSection.css'; // Correctly reference the HeroSection CSS file
import image1 from '../assets/image1.png'; // Correct path to assets
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import burgerImage from '../assets/burger.png';
import plantImage from '../assets/plant.png';

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Decorative Images */}
      <img src={burgerImage} alt="Burger" className="decorative-image burger" />
      <img src={plantImage} alt="Plant" className="decorative-image plant" />

      {/* New Tag */}
      <div className="new-tagtext">
        <p> <div className="new-tag">NEW </div>Experience the Joy of Fresh Food Delivered to Your Doorstep</p>
      </div>
      {/* Main Heading with Overlapping Images */}
      <div className="hero-heading-container">
        <h1 className="hero-heading">
          Fresh from
          <span className="image-wrapper image-1">
            <img src={image1} alt="Image 1" />
          </span>
          the kitchen<br /> to your doorstep
          <span className="image-wrapper image-2">
            <img src={image2} alt="Image 2" />
          </span>
          an<br /> easy
          <span className="image-wrapper image-3">
             <img src={image3} alt="Image 3" />
          </span>
          dining solution
        </h1>
      </div>

      {/* Description */}
      <p>
        Enjoy farm-fresh ingredients and gourmet recipes crafted by expert chefs,
        delivered to your doorstep for a delightful dining experience.
      </p>

      {/* Search Bar */}
      <div className="search-bar">
        <FaMapMarkerAlt className="search-icon" />
        <input type="text" placeholder="Search food or your location..." />
        <button>Search now</button>
      </div>
    </section>
  );
};

export default HeroSection;
