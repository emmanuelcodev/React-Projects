import React from 'react';
import { useState } from 'react';
import tasks from './tasks'
import Task from './Task/Task'
import './css/list.css'

const List = () => {

  const [items, setItems] = useState(tasks);




  const removeFunction = (id) =>{
    const newItems = items.filter((item)=>(item.id !== id));
    setItems(newItems);
   }


  return (
    <div className="container">
      {items.map((item) => {
        console.log(item);
        return (
          <Task key={item.id} {...item} removeFunction={removeFunction}></Task>
        );
      })}
    </div>
  );
};

export default List;
