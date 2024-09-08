import React, { useState } from 'react';
import './style/Menu.css';
import burgerImage from './../assets/food-menu/burger.png';
import pizzaImage from './../assets/food-menu/pizza.png';
import friedImage from './../assets/food-menu/cartofi.png';
import burger2Image from './../assets/food-menu/burger2.png'

const Menu = () => {
  // Initial menu data
  const [menuItems] = useState([
    {
      name: "FULL MENU OF THE DAY",
      description: "Create your own menu - 800g",
      price: "50,00 LEI",
      imageUrl: pizzaImage,
      category: "full_menu",
    },
    {
      name: "MENU OF THE DAY WITH SALAD",
      description: "Create your own menu - 500g",
      price: "30,00 LEI",
      imageUrl: friedImage,
      category: "with_salad",
    },
    {
      name: "MENU OF THE DAY WITH SOUP",
      description: "Create your own menu - 600g",
      price: "35,00 LEI",
      imageUrl: burgerImage,
      category: "with_soup",
    },
    {
      name: "MENU CHICKEN SCHNITZ WITH FRIED POTATOES AND COLLEGE SALAD",
      description: "Șnițel de pui 300g cu cartofi prăjiți 150g și salată de varză 150g",
      price: "32,00 LEI",
      imageUrl: pizzaImage,
      category: "chicken_schnitz",
    },
    {
      name: "SHANGHAI CHICKEN MENU WITH FRIES AND COLLEGE SALAD",
      description: "Chicken Shanghai 300g with fries 150g and coleslaw 150g",
      price: "32,00 LEI",
      imageUrl: burger2Image,
      category: "shanghai_chicken",
    },
    {
      name: "MENU CHICKEN WINGS WITH FRIED POTATOES AND COLLEGE SALAD",
      description: "Chicken wings 300g with fries 150g and coleslaw 150g",
      price: "32,00 LEI",
      imageUrl: burgerImage,
      category: "chicken_wings",
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all'); // Default to show all items

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="menu-container">
      <h1>MENUS</h1>
      <div className="category-buttons">
        <button onClick={() => handleCategoryChange('all')}>All</button>
        <button onClick={() => handleCategoryChange('full_menu')}>Full Menu</button>
        <button onClick={() => handleCategoryChange('with_salad')}>With Salad</button>
        <button onClick={() => handleCategoryChange('with_soup')}>With Soup</button>
        <button onClick={() => handleCategoryChange('chicken_schnitz')}>Chicken Schnitz</button>
        <button onClick={() => handleCategoryChange('shanghai_chicken')}>Shanghai Chicken</button>
        <button onClick={() => handleCategoryChange('chicken_wings')}>Chicken Wings</button>
      </div>
      <div className="menu-items">
        {filteredItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

// Food Item Component
const MenuItem = ({ name, description, price, imageUrl }) => {
  return (
    <div className="menu-item">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <span>{price}</span>
    </div>
  );
};

export default Menu;
