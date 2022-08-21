import React from 'react';

const Task = ({id, taskName, time, imgSrc, removeFunction}) => {

    const randomBackgroundColor = () => {
      const colorClases = [
        "bgcolor1",
        "bgcolor2",
        "bgcolor3",
        "bgcolor4",
        "bgcolor5",
        "bgcolor6",
        "bgcolor7",
        "bgcolor8",
        "bgcolor9",
        "bgcolor10",
        "bgcolor11",
        "bgcolor12",
        "bgcolor13",
        "bgcolor14",
        "bgcolor15",
        "bgcolor16",
        "bgcolor17",
        "bgcolor18",
        "bgcolor19",
        "bgcolor20",
        "bgcolor21",
        "bgcolor22",
        "bgcolor23",
        "bgcolor24",
        "bgcolor25",
        "bgcolor26",
        "bgcolor27",
      ];
      const colorIndex = Math.round(Math.random() * 26);

      return colorClases[colorIndex];
    };



return (
  <div className="row justify-content-center task">
    <div className={"col-4 " + randomBackgroundColor()}>
      <p className="taskName">{taskName}</p>
      <img src={imgSrc} />

      <p>{time}</p>

      <button className='btn'
        onClick={() => {
          removeFunction(id);
        }}
      >
        Remove
      </button>
    </div>
  </div>
);
}



export default Task;

