import React from 'react';
import {useState} from 'react';
import data from './data';
import List from './List';
function App() {
  
/*
Create a function component for each entry, include a remove button so its a "to do list";
Import data here and then Map it here and then use that keys to display it
Create fucntion to remove it that include id and filter and pass it along here so it has it on lower levels
UseState to keep track of all the changes
Create Clear button so that it clear everything by reseting the state



*/



  return(

   <h2>
     <List />
   </h2>

  );
}

export default App;
