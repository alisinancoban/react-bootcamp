import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

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
    let persons = null;

    if(this.state.showPersons){
      persons =<Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            />;
    }

    return (
      <div className={styles.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    //this compile to this code
    //</Person>return React.createElement('div', {className: "App"}, React.createElement('h1', null, "Hi I am a React App"));</div>
  }
}

export default App;

