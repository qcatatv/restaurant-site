import React from 'react';
import './style/MenuItem.css'; // Import the CSS for MenuItem

const MenuItem = ({ image, name, price, rating }) => {
  return (
    <div className="menu-item">
      <img className='menu-image' src={image} alt={name} />
      <div className="info-food">
        <h3>{name}</h3>
        <div className="rating">
          <span>{'★'.repeat(Math.floor(rating))}</span>
        </div>
        <p className="price">${price.toFixed(2)}</p>
        <button className='ordernow'>Buy Now</button>
      </div>
    </div>
  );
};

export default MenuItem;
