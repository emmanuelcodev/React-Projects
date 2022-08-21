import React, {useState} from 'react';
import Question from './Question';

import questions from '../../data/data';



const Questions = () =>{
  const [queries, setQueries] = useState(questions);
 
  const toggleVisiblity = (id) => {
      // get element
      const pMessage = document.querySelector("#p" + id);
      
      console.log(pMessage.classList.contains("on"));
      if(pMessage.classList.contains("off")){
         
            pMessage.classList.remove("off");
      }else{
          
          pMessage.classList.add("off");
      }
    console.log(pMessage.classList);

  }
  

  return (
    <div className="flex-container2">
      {queries.map((query) => {
        return (
          <Question
            key={query.id}
            toggleVisiblity={toggleVisiblity}
            {...query}
          />
        );
      })}
    </div>
  );
}

export default Questions;