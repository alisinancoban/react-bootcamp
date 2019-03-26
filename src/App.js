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
    otherState: "some other value",
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    //inline style
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I m a React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    //this compile to this code
    //</Person>return React.createElement('div', {className: "App"}, React.createElement('h1', null, "Hi I am a React App"));</div>
  }
}

export default App;

