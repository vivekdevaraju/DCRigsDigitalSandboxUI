import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons :[
      {name : "Vivek", age :30},
      {name : "Divya", age :29},
      {name : "Krishna", age :29}
    ],
    showPersons : false
  }
  switchNameHandler = (newName) => {
   this.setState({
    persons :[
      {name : newName, age :30},
      {name : "Divya", age :29},
      {name : "Krishna", age :290}
    ]
   })
  }
   nameChangeHandler = (event) => {
    this.setState({
     persons :[
       {name : 'Vivek', age :30},
       {name : event.target.value, age :29},
       {name : "Krishna", age :29}
     ]
    })
  }

  togglePersonHanlder =() => {
    const currentState = this.state.showPersons;
    this.setState({
      showPersons : !currentState
    })
  }
  render() {
    const buttonStyle = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    }

    let persons = null;
    if(this.state.showPersons){
           persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name = {person.name} age = {person.age}/>
          })}       
     </div>
      );
    }
     return (
    <div className="App">
     <h1> Hi, </h1>
     <button style = {buttonStyle} onClick = {this.togglePersonHanlder}>Toggle Persons </button>
     {persons}
    </div>
    );
    // return React.createElement('div',null,'h1','Hi React App')
  }
}

export default App;
