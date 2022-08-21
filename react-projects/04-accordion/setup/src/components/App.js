import React from 'react';
import Questions from './Questions/Questions'
import '../css/App.css'
const App = () =>{
    return (
    
      <div className="flex-container">
        <div className="flex-title">
          <p>Questions And Answers About Login </p>
        </div>
        <div className="flex-questions">
          <Questions />
        </div>
      </div>
    );
}

export default App;


/*  Plan

1. Build app as two parts.... part a title, part b questions 
2. Set up app.css to split as flex
3. 
4.
5.




*/