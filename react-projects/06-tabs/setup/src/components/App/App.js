import React, {useState, useEffect} from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'
import '../../css/App/App.css'
import Tab from '../Tab/Tab'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([]);
  const [userChoice, setUserChoice] = useState(0);
  const getUsers = async() =>{
    // fetch
    const response = await fetch(url);
    // get response
    const users = await response.json();
    // fillit as useState
    console.log(users);
    setUsers(users);
    setIsLoading(false);
  }

  // function is to make api call and get data
  useEffect(() =>{
    // get user data, but only want this whole thing once because otherwise infinite loop
    getUsers();
    
  }, []

  );

// Get User information
const selectUser = (id) => {
  
  const newUserChoice = users.findIndex((user)=>user.id ===id)
  console.log(newUserChoice);
  setUserChoice(newUserChoice);



}


  // in case it has loaded but does not have data
  if (isLoading) {
    return <div>Loading...</div>;
  }
    return (
      <div className="all-container">
        <p className="exp-p">
          Exp<span className="exp-erie">erie</span>nce
        </p>
        <div className="app-div">
          <div className="side-tab">
            {users.map((user) => {
              return (
                <p
                  onClick={() => selectUser(user.id)}
                  className="side-tab-p"
                  key={user.id}
                >
                  {" "}
                  {user.company}
                </p>
              );
            })}
          </div>
          
            <Tab {...users[userChoice]} />
         
        </div>
      </div>
    );

}

export default App;



/*
Create Title
Modify the App component to read the data from the api
- use effect to read it
- store it in a usestate variable
- create a function to retrieve data based on id


Create Component to display tabs



*/