import React from 'react';
import './style/DiscountBanner.css';
import burgerImage from '../assets/restaurant1.jpg'; // Replace with your image path
import wafflesImage from '../assets/restaurant1.jpg'; // Replace with your image path
import saladImage from '../assets/restaurant1.jpg'; // Replace with your image path

const DiscountBanner = () => {
  return (
    <div className="discount-banner">
      {/* Left side - Big offer */}
      <div className="banner-item big-offer">
        <img src={burgerImage} alt="Burger" />
        <div className="discount-text">
          <h2>25% Discount</h2>
          <div className="price-tag">
            <span>$2.60</span>
          </div>
        </div>
      </div>

      {/* Right side - Smaller offers */}
      <div className="small-offers">
        <div className="banner-item small-offer">
          <img src={wafflesImage} alt="Waffles" />
          <div className="discount-text">
            <h2>Save 20%</h2>
            <div className="price-tag">
              <span>$3.80</span>
            </div>
          </div>
        </div>
        <div className="banner-item small-offer">
          <img src={saladImage} alt="Tacos" />
          <div className="discount-text">
            <h2>Tortilla Wrap Tacos</h2>
            <p>Get Your Order Fresh</p>
            <div className="price-tag">
              <span>15% Off</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
