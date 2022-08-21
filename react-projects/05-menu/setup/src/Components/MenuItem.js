import React from 'react';
import '../css/MenuItem.css'

const MenuItem = ({id,title,category,price,img,desc,}) =>{



    return (
      <div className="food-card ">
        <div className="food-card-image-container">
          <img className="food-card-image" src={img}></img>
        </div>

        <div className="food-card-info">
          <div className="food-card-header">
            <p className="food-card-title">{title}</p>
            <p className="food-card-price">${Math.floor(price)}</p>
            
          </div>

          <p className="food-card-description">{desc}</p>
        </div>
      </div>
    );
}


export default MenuItem;