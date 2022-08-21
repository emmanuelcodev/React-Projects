import React from 'react'
import { Link } from 'react-router-dom';
import './css/tour.css'

const Tour = ({ id, name, info, image, price, removeLocation }) => {
  console.log("name " + name + " id: " + id);
const maxCharLenght = 150;
  const ToggleLength = (id, str) => {
    const currentTextElement = document.getElementById(id);
    
    if (currentTextElement.innerText.length < str.length) {
      currentTextElement.innerText = str;
      currentTextElement.nextElementSibling.innerText = " " + "Show Less";
    } else {
      currentTextElement.innerText = str.substring(0, maxCharLenght);
      currentTextElement.nextElementSibling.innerText = " " + "Read More";
    }
  };

  const data = {
    id:id,
    name: name,
    info: info,
    image: image,
    price: price,
    
  };

  return (
    <div className="row justify-content-center ">
      <div className="col-11 col-md-5 col-lg-xl-4  destination">
        <img className="tour-image" src={image}></img>
        <p className="content tour-name">{name}</p>
        <p className="content tour-price">${price}</p>
        <div className="clear"></div>
        <p className="content tour-info">
          <span id={id}>{info.substring(0, maxCharLenght)}</span>
          <a className="read-more" onClick={() => ToggleLength(id, info)}>
            {" "}
            Read More
          </a>
          {/* 
          <Link to="/LocationDetails" state={{ data: data }}>
            Show All Details
          </Link>
          */}
        </p>

        <button
          className="tour-button content"
          onClick={() => removeLocation(id)}
        >
          {" "}
          Not Interested{" "}
        </button>
      </div>
    </div>
  );
};

export default Tour;