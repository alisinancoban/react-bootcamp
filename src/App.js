import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

//functional type component
class App extends Component {
  state = {
    persons: [
      {name: "Sinan", age: 24},
      {name: "Alper", age: 22},
      {name: "Mustafa", age: 55}
    ],
    otherState: "some other value"
  }

  switchNameHandler = (newName) => {
    //DONT DO THIS => this.state.persons[0].name = "Ali Sinan";
    this.setState({
      persons: [
        {name: newName, age: 23},
        {name: "Alper Cbn", age: 21},
        {name: "Mustafa", age: 40}
    ]
  })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Sinan", age: 23},
        {name: event.target.value, age: 21},
        {name: "Mustafa", age: 40}
     ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I m a React App</h1>
        <p>This is really working</p>
        <button onClick = {this.switchNameHandler.bind(this, "Sinan")}>Performance Switch Name</button>
        <button onClick = {() => this.switchNameHandler("Sinan!")}>Inefficient Switch Name</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, "Sinan!")}
          changed = {this.nameChangedHandler} >My Hobies: Racing
        </Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>
      </div>
    );
    //this compile to this code
    //</Person>return React.createElement('div', {className: "App"}, React.createElement('h1', null, "Hi I am a React App"));</div>
  }
}

export default App;

