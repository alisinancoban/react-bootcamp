import React, {Component} from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends Component{
  shouldComponentUpdate(nextProps, nextState){
    console.log("Persons.js shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("Persons.js getSnapshotBeforeUpdate");
    return {message: "snapshot"};
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("Persons.js componentDidUpdate");
    console.log(snapshot);
  }

  render(){
    console.log("Persons.js render");

    return this.props.persons.map((person, index) => {
      return (<ErrorBoundary key={person.id}>
      <Person
        click={this.props.clicked.bind(this, index)} 
        name={person.name} 
        age={person.age}
        changed={(event) => this.props.changed(event, person.id)}
        />
      </ErrorBoundary> 
      );
    });
  }
}
  
export default Persons;