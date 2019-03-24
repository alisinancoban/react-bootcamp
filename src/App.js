import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

//functional type component
const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Sinan", age: 24},
      {name: "Alper", age: 22},
      {name: "Mustafa", age: 55}
    ]
  });
  const [otherState, setOtherState] = useState("some another value");
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: "Ali Sinan", age: 23},
        {name: "Alper Cbn", age: 21},
        {name: "Mustafa", age: 40}
      ]
    });
  };

    return (
      <div className="App">
        <h1>Hi I m a React App</h1>
        <p>This is really working</p>
        <button onClick = {switchNameHandler}>Switch Name</button>
        <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age}/>
        <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age}>My Hobies: Racing</Person>
        <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>
      </div>
    );
    //this compile to this code
    //</Person>return React.createElement('div', {className: "App"}, React.createElement('h1', null, "Hi I am a React App"));</div>
  }

export default app;

