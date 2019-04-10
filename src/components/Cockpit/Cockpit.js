import React, {useEffect} from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log("Cockpit.js useEffect");
    //Http request
    setTimeout(() => {
      console.log("saved date to cloud!");
    },1000);
    return () => {
      console.log("Cockpit.js cleanup work in useEffect");
    }
  }, []);

  useEffect(() => {
    console.log("Cockpit.js 2nd useEffect");
    return () => {
      console.log("Cockpit.js cleanup work in 2nd useEffect");
    }
  })

    let assignedClasses = [];
    let btnClass = "";

    if(props.showPersons){
        btnClass = styles.Red;
    }

    if(props.personsLength <= 2){
      assignedClasses.push(styles.red);
    }
    if(props.personsLength <= 1){
      assignedClasses.push(styles.bold);
    }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>This is really working</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(cockpit);