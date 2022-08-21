import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from '../../data/data'
import Slider from '../Slider/Slider';

function App() {
  const [users, setUsers] = useState(data);
  const [selectedUserIndex, setSelectedUserIndex] = useState(0);

  const loadUsers =() => {
    
  }

  const displayUser =(userId)=>{
    const userIndex = users.findIndex((user)=>user.id ==userId)
    setSelectedUserIndex(userId)
  }


  const showSlide = ()=>{
    // grab all slides
    let slides = document.getElementsByClassName("my-slides");

    for(let i=0; i< users.length; i++){
      slides[i].style.display = "none";

    }
    slides[selectedUserIndex].style.display = "block";

  }

  const nextSlide = ()=>{
    // increment by 1 unless reached end then start at begining 
    const newIndex = (selectedUserIndex === users.length-1)? 0: selectedUserIndex+1;
    setSelectedUserIndex(newIndex);
  }

  const prevSlide = () => {
    // subtract index by 1 unless reached 0, then start at end
    const newIndex = (selectedUserIndex==0)?users.length-1: selectedUserIndex-1; 
    setSelectedUserIndex(newIndex)
  }
  
  useEffect(()=>{
    showSlide();
  })
  
  return (
    <div>
      <h2 className='review-title'><span className='orange'>/</span> Reviews</h2>
      <Slider users = {users} nextSlide={nextSlide} prevSlide={prevSlide}/>
          
    </div>
  );
}

export default App;

