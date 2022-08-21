import React, { useState, useEffect } from 'react';

import Tours from './Components/Tours.js'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  return (
    <div>
      
      <Tours/>
      
    </div>
 
  
  );
}

export default App;
/*
1. Create Reviews Component to do the following
  a. Display Tours Title - Done
  b. Displays Review Component
    1. Make UseState to data - Done
    2. Iterate through the data to Map Create Tour Component - Done
    3. Pass UseState Data To Tour component in the Map 0- Done



2. Create Tour Component

   1. Add all parts and Style the Tour Component 
   2. Not Interested Remove Button - pass that to Map Component - Done
      a. Remove Button should have id to pass it
   3. Add Read More 0 Done
      a. add js effect to make load more of the text upon it being toggled true false
        . most likely a useStateVariable and a shortcircuit approach to show more text
        . or a class to make part of it invisible or a function(using the variable to decide how much words to show)
  4. Style it to look reasouranble compoennt - Done
   5. Style it - 
    a. Import bootstrap
    b. fix classes
   5. 

3. Style Done

4. Upgrades

*/


/*  Upgrades
1. Clear All 
2. Restore All
3. Shuffle
5. Discounted Prices
6. Wiat before you go type of thing
7. Get it from API? Online
8. Second Page + Calculates it all + Discount Page + Username Display

*/