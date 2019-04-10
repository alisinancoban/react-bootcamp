import React, {PureComponent} from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends PureComponent{
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