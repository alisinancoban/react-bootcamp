import React from 'react';
import styles from './Person.css';

//function type component
const person = (props) => {
    const random = Math.random();
        if(random > 0.99){
            throw new Error("Something went wrong");
        }
    console.log("Person.js render");
    return (
        <div className={styles.Person}>
            <p onClick = {props.click}>I am {props.name} and {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;