import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log("App.js ctor");
  }

  state = {
    persons: [
      {id: "2a8dce0a66a045ac95238ea0a21b9bdb", name: "Sinan", age: 24},
      {id: "607814b3c5d94d1d8315901d404460a6", name: "Alper", age: 22},
      {id: "6bcf405d1919451e8e319639626a6e80", name: "Mustafa", age: 55}
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true
  }

  componentDidMount(){
    console.log("App.js componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("App.js shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(){
    console.log("App.js componentDidUpdate");
  }

  static getDerivedStateFromProps(props, state){
    console.log("App.js getDerivedStateFromProps", props);
    return state;
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
    console.log("App.js render");
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
    }

    return (
      <div className={styles.App}>
        <button onClick={()=>{
          this.setState({showCockpit: false});
        }}>Remove Cockpit</button>
        {this.state.showCockpit ? (
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />) : null }
        {persons}
      </div>
    );
    //this compile to this code
    //</Person>return React.createElement('div', {className: "App"}, React.createElement('h1', null, "Hi I am a React App"));</div>
  }
}

export default App;

