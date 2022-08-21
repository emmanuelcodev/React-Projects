import React from "react";
import '../../css/Question.css'

const Question = ({ id, title, info, toggleVisiblity }) => {
    console.log("p" + id);
  return (
    <div className={"question-box" } id = {"q" + id }>
      <p className="plus-question">
        {title}
        <span onClick={() => toggleVisiblity(id)} className="plus-text">
          +
        </span>
      </p>
      <p  id={"p" + id} className="question-info off">
        {info}
      </p>
    </div>

              

  );
};


export default Question;