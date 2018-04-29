import React from 'react';

import classes from './Person.css';


const person = (props) => {   
    return (<div className = {classes.Person} >
        <p onClick = {props.click}>I'm a Person and My name is {props.name} I am {props.age} Old.</p>
        <p>{props.children}</p>
        <input type="text" onChange = {props.changed} value = {props.name}/>
        </div>);

};

export default person;