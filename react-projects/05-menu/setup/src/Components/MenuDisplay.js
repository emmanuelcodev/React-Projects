import React, {useState} from 'react';
import Menu from './Menu';
import data from '../data/data';
import '../css/MenuDisplay.css';

const MenuDisplay = () =>{
    const [foodItems, SetFoodItems] = useState(data);
    
    const resetMenu = () =>{
        SetFoodItems(data);
    }

    const getMenu = (filterSelection) =>{
        // 0 means all - default, 1 means breakfest, 2 means lunch, 3 shakes
        const filterTypes = ["all", "breakfast", "lunch", "shakes"];
        const filterSelected = filterTypes[parseInt(filterSelection)];
        
        console.log(filterSelected);
        // all 
        if(filterSelected === "all"){
            SetFoodItems(data);
        }else{
            const filterMenu = data.filter((foodItem)=>{ 
                return foodItem.category===filterSelected});
         
            SetFoodItems(filterMenu);
        }

        
    }
 
    
    console.log(foodItems);
    return (
      <div className="flex-container-v menu-display-page">
        <p className="menu-title">
          O<span className='menu-title-underline'>ur Me</span>nu
        </p>
        <div className="flex-container-h">
          <span className="menu-item" onClick={() => getMenu(0)}>
            All
          </span>
          <span className="menu-item" onClick={() => getMenu(1)}>
            Breakfest
          </span>
          <span className="menu-item" onClick={() => getMenu(2)}>
            Lunch
          </span>
          <span className="menu-item" onClick={() => getMenu(3)}>
            Shakes
          </span>
        </div>

        <Menu foodList={foodItems} />
      </div>
    );

}

export default MenuDisplay;
