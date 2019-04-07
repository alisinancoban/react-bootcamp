import React, {Component} from 'react';
import styles from './Person.css';

class Person extends Component{
    render(){
        console.log("Person.js render");
        const random = Math.random();
        if(random > 0.95){
            throw new Error("Something went wrong");
        }

        return (
            <div className={styles.Person}>
                <p onClick={this.props.click}>
                    I am {this.props.name} and {this.props.age} years old
                </p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            </div>
        );
    }

    
}

export default Person;