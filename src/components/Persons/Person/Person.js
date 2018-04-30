import React,{Component} from 'react';

import classes from './Person.css';

class Person extends Component {
    componentWillMount(){
        console.log('[Person.js] componentWillMount');
    }
    componentDidMount(){
        console.log('[Person.js] componentDidMount');
    }
    render() {
        console.log('[Person.js] Render');
        return <div className = {classes.Person} >
        <p onClick = {this.props.click}>I'm a Person and My name is {this.props.name} I am {this.props.age} Old.</p>
        <p>{this.props.children}</p>
        <input type="text" onChange = {this.props.changed} value = {this.props.name}/>
        </div>;
    }

}

export default Person;