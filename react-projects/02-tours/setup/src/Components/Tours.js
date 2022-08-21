
import React, {useState, useEffect} from 'react';
import Tour from './Tour'


const Tours = () =>{  
    const url = "https://course-api.com/react-tours-project";
    const [locationsData, SetLocationsData] = useState([]);

    const removeLocation = (id) => {
        const newLocationsData = locationsData.filter((location)=>location.id!==id)
        SetLocationsData(newLocationsData);
    }
    const getLocations = async(url) => {
        const response = await fetch(url);
        const locations = await response.json();
        
        SetLocationsData(locations);
    }
  
    useEffect(()=>{
        getLocations(url);

    }, []);



    return (
      <div>
        
        {
 

        locationsData.map((location) => {
            
          return (
            <Tour
              key={location.id}
              removeLocation={removeLocation}
              {...location}
            />
          );})
        
        }
      </div>
    );

}




export default Tours;
/*
"id":"rec6d6T3q5EBIdCfD"
"name":"Best of Paris in 7 Days Tour"
"info":"Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
"image":"https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
"price":"1,995"}
*/
