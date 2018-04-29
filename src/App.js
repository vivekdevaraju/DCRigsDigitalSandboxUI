import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons :[
      {id:'1',name : "Vivek", age :30},
      {id:'2',name : "Divya", age :29},
      {id:'3',name : "Krishna", age :29}
    ],
    showPersons : false
  }
 
   nameChangeHandler = (event,id) => {
     const personIndex = this.state.persons.findIndex(p=>{return p.id===id;});
     const person = {...this.state.persons[personIndex]};
     person.name = event.target.value;
     const persons = [...this.state.persons];
     persons[personIndex] = person;
    this.setState({persons :persons})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }
  
  togglePersonHanlder =() => {
    const currentState = this.state.showPersons;
    this.setState({
      showPersons : !currentState
    })
  }
  render() {
    const buttonStyle = {
      backgroundColor : 'green',
      color :'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    }

    let persons = null;
    if(this.state.showPersons){
           persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person name = {person.name} age = {person.age}
            click ={() => {this.deletePersonHandler(index)}}
            key = {person.id}
            changed = {(event) => {this.nameChangeHandler(event,person.id)}}/>
          })}       
     </div>
      );
      buttonStyle.backgroundColor = 'red';
     
    }
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
     return (
    <div className="App">
     <h1> Hi, </h1>
     <p className = {classes.join(' ')}>This is really working</p>

     <button style = {buttonStyle} onClick = {this.togglePersonHanlder}>Toggle Persons </button>
     {persons}
    </div>
    );
    // return React.createElement('div',null,'h1','Hi React App')
  }
}

export default App;
