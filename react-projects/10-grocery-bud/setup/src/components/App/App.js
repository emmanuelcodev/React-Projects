import React, { useState, useEffect } from 'react';
import Alert from '../Alert/Alert';
import GroceryList from '../GroceryList/GroceryList';
import '../../css/Alert/Alert.css'
import '../../css/App/App.css'
import '../../css/GroceryList/GroceryList.css'

function App() {
  const title = "Grocery Bud"
  return(
    <div className="app-level">

    <GroceryList title={title}/>


    
    </div>
  )
}

export default App;
