import React from 'react';
import { createPortal } from 'react-dom/cjs/react-dom.production.min';
import '../../css/Tab/Tab.css';
import {uuid} from 'uuidv4';
import {v4} from 'uuid';
/*
id: 'recIL6mJNfWObonls'
order: 2
title: 'Front-End Engineer'
dates: 'May 2015 - December 2015' 
duties: Array(4)

*/
const Tab = ({id, company, title, order,  dates, duties}) => {
    //const {userChoice} = props.userChoice;
    

  return (
    <div className="tab-container">
      <p>
        
        <span className="tab-title">{title}</span>
      </p>
      <p className="tab-company"> {company} </p>
      <p className="tab-dates"> {dates} </p>
      <ul className="tab-duties">
        {duties.map((duty) => {
          return <li key={v4()}>{duty}</li>;
        })}
      </ul>

      <button className="tab-button"> More Info</button>
    </div>
  );
};




export default Tab;