import React from 'react';
import './Footer.css'; // Correctly reference the Footer CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="reviews-section">
        <div className="avatars">
          <img src="https://i.pravatar.cc/40?img=1" alt="Customer 1" />
          <img src="https://i.pravatar.cc/40?img=2" alt="Customer 2" />
          <img src="https://i.pravatar.cc/40?img=3" alt="Customer 3" />
        </div>
        <div className="review-text">
          <p>Our happy customers</p>
          <div className="rating">
            ⭐ 4.8 <span>(10.2K Reviews by our customers)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
