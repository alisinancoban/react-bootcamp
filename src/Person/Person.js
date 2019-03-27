import React from 'react';
import Radium from 'radium';
import './Person.css';

//function type component
const person = (props) => {
    return (
        <div className="Person">
            <p onClick = {props.click}>I am {props.name} and {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Radium(person);