// Home.js
import React from 'react';
import './style/Home.css';
import MenuItem from './MenuItem';
import DiscountBanner from './DiscountBanner';
import burger from './../assets/food-menu/burgerHD.png'
import potato from './../assets/cartofiprajiti.png'
import pizza from './../assets/pizza.png'
import burgermd from './../assets/burder-middle.png'

const menuItems = [
  { image: burger, name: 'Chicken Burger', price: 3.50, rating: 4.5 },
  { image: pizza, name: 'Chicken Pizza', price: 4.20, rating: 3 },
  { image: potato, name: 'French Fries', price: 2.50, rating: 4.3 },
  { image: burgermd, name: 'Grill Sandwich', price: 4.80, rating: 4.6 },
];

const Home = () => {
  return (
    <header>
      <div className='container'>
        <div className='slogan'>
          <h1 className='hd-text'>The Trasties & <br></br><span>Best Food</span> In The <br></br>World</h1>
        </div>
        <img src={burger} alt=''/>
      </div>
      <div className='middle'>
        <div className='info'>
          <h1>Best Food Categories</h1>
        </div>
        <div className='food-order'>
          <div className='categori-img'>
            <img src={potato} alt=''/>
            <p>French Fries</p>
            <button className='order-btn'>Order Now</button>
          </div>
          <div className='categori-img'>
            <img src={pizza} alt=''/>
            <p>Chicken Pizza</p>
            <button className='order-btn'>Order Now</button>
          </div>
          <div className='categori-img'>
            <img src={burgermd} alt=''/>
            <p>Chicken Burger</p>
            <button className='order-btn'>Order Now</button>   
          </div>
        </div>
        <div className='regular-men'>
          <h1>Our <span>Regular</span> Menu</h1>
          <p>These Are Our Regular Menus. You Can <br></br>Order Anything You Like.</p>
          <button className='seeall-btn'><a href='/menu'>See All</a></button>
          <div className='food-menu'>
            {/* Render the MenuItem components here */}
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
          <div className='discout'>
          <DiscountBanner />
        </div>
        </div>
      </div>  
    </header>
  );
};

export default Home;