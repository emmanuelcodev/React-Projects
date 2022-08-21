import React from 'react';
import { useLocation } from "react-router-dom";
import '../css/tour-slider.css'
import TourMetaData from './TourMetaData/TourMetaData'
const TouristDetail = ()=>{
    const location = useLocation();
    const { id, name, info, image, price} = location.state.data
    console.log(location.state);
    return (
      
      <div>
        {/* Slider of Pictures */}

        <div className="slider-container">
          <div className="slider">
            <div className="slides">
              <div id="slides__1" className="slide">
                <span className="slide__text">
                  <img src={image}></img>
                </span>
                <a className="slide__prev" href="#slides__4" title="Next"></a>
                <a className="slide__next" href="#slides__2" title="Next"></a>
              </div>
              <div id="slides__2" className="slide">
                <span className="slide__text">2</span>
                <a className="slide__prev" href="#slides__1" title="Prev"></a>
                <a className="slide__next" href="#slides__3" title="Next"></a>
              </div>
              <div id="slides__3" className="slide">
                <span className="slide__text">3</span>
                <a className="slide__prev" href="#slides__2" title="Prev"></a>
                <a className="slide__next" href="#slides__4" title="Next"></a>
              </div>
              <div id="slides__4" className="slide">
                <span className="slide__text">4</span>
                <a className="slide__prev" href="#slides__3" title="Prev"></a>
                <a className="slide__next" href="#slides__1" title="Prev"></a>
              </div>
            </div>

            <div className="slider__nav">
              <a className="slider__navlink" href="#slides__1"></a>
              <a className="slider__navlink" href="#slides__2"></a>
              <a className="slider__navlink" href="#slides__3"></a>
              <a className="slider__navlink" href="#slides__4"></a>
            </div>
          </div>
        </div>

        <img src={image} />
        <p>Image Description</p>

        {/* section of pictures underneath */}

        <section className="pic-"></section>

        <p>Title</p>
        <p>Description</p>
        <nav>
          <ul>
            <li>Hot Spots</li>
            <li>Food</li>
            <li>Hotel</li>
          </ul>
        </nav>
      </div>
    );
}



export default TouristDetail;


