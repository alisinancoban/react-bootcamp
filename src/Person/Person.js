import React from 'react';
import styles from './Person.css';

//function type component
const person = (props) => {
    const random = Math.random();
        if(random > 0.8){
            throw new Error("Something went wrong");
        }
    return (
        <div className={styles.Person}>
            <p onClick = {props.click}>I am {props.name} and {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;