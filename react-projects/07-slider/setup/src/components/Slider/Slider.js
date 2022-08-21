import React from 'react';
import '../../css/Slider/Slider.css'


const Slider = ({users, nextSlide, prevSlide})=>{



    return (
      <div className='slideshow-container'>
       
        {
        users.map((user)=>{
            return (<div key = {user.id} className='my-slides fade'>
                        <div className='user-image-container'>
                        <img className='user-image' src={user.image}/>
                        </div>
                        <p className='user-name'>{user.name}</p>
                        <p className='user-title'>{user.title}</p>
                        <p className='user-quote'>{user.quote}</p>

                    </div>)

        })
        }




      
        {/* Next and previous buttons */}

          <a className="prev" onClick={()=>prevSlide()}>
            &#10094;
          </a>
          <a className="next" onClick={()=> nextSlide()}>
            &#10095;
          </a>
        
          
    </div>       
    );
    
}

export default Slider;

