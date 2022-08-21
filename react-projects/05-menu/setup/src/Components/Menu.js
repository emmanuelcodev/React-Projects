import React from 'react';
import MenuItem from './MenuItem';
import '../css/Menu.css'
const Menu = ({ foodList }) => {
    console.log(foodList);
  return (
    <div className="menu-listed">
      {
      foodList.map((foodItem) => {
        return <MenuItem key={foodItem.id} {...foodItem} />;
      })
      }
    </div>
  );
};

 export default Menu;