import React from 'react';

const person = (props) => {
    return (<div>
        <h1>I'm a Person and My name is {props.name} I am {props.age} </h1>
        <p>{props.children}</p>
        </div>)

}

export default person;