import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

//class type component
class App extends Component {
  state = {
    persons: [
      {name: "Sinan", age: 24},
      {name: "Alper", age: 22},
      {name: "Mustafa", age: 55}
    ],
    otherState: "some other value"
  }

  switchNameHandler = () => {
    //DONT DO THIS => this.state.persons[0].name = "Ali Sinan";
    this.setState({
      persons: [
        {name: "Ali Sinan", age: 23},
        {name: "Alper Cbn", age: 21},
        {name: "Mustafa Ali", age: 40}
    ]
  })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I m a React App</h1>
        <p>This is really working</p>
        <button onClick = {this.switchNameHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name="Alper" age="20">My Hobies: Racing</Person>
      </div>
    );
    //this compile to this code
    //</Person>return React.createElement('div', {className: "App"}, React.createElement('h1', null, "Hi I am a React App"));</div>
  }
}

export default App;
