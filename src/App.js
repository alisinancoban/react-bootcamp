import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person.js';

//functional type component
class App extends Component {
  state = {
    persons: [
      {id: "2a8dce0a66a045ac95238ea0a21b9bdb", name: "Sinan", age: 24},
      {id: "607814b3c5d94d1d8315901d404460a6", name: "Alper", age: 22},
      {id: "6bcf405d1919451e8e319639626a6e80", name: "Mustafa", age: 55}
    ],
    otherState: "some other value",
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
    /*this.setState({
      persons: [
        {name: "Sinan", age: 23},
        {name: event.target.value, age: 21},
        {name: "Mustafa", age: 40}
     ]
    })*/
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    //const persons = this.state.persons.slice(); older one
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonHandler.bind(this, index)} 
              //click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              key={person.id} />
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      }
    }

    //let classes = ["red", "bold"].join(" "); //red bold
    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push("red");
    }
    if(this.state.persons.length <= 1){
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi I m a React App</h1>
        <p className={classes.join(" ")}>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    //this compile to this code
    //</Person>return React.createElement('div', {className: "App"}, React.createElement('h1', null, "Hi I am a React App"));</div>
  }
}

export default Radium(App);

