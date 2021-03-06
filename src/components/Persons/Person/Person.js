import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import styles from './Person.css';

class Person extends Component {
    render() {
      console.log('[Person.js] rendering...');
      return (
        <Auxiliary className={styles.Person}>
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          <p key="i2">{this.props.children}</p>
          <input
            key="i3"
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </Auxiliary>
      );
    }
  }
  
  export default withClass(Person, styles.Person);
