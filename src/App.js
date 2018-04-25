import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons :[
      {name : "Vivek", age :30},
      {name : "Divya", age :29},
      {name : "Krishna", age :29}
    ]
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
  render() {
     return (
    <div className="App">
     <h1> Hi, </h1>
     <button onClick = {this.switchNameHandler.bind(this,'bikki')}>Switch Name </button>
     <Person name ={this.state.persons[0].name} age = {this.state.persons[0].age}/>
     <Person name ={this.state.persons[1].name} age = {this.state.persons[1].age} 
     click ={this.switchNameHandler.bind(this,'Dibya')}
     changedProperty = {this.nameChangeHandler}>My Hobby is drawing</Person>
     <Person name ={this.state.persons[2].name} age = {this.state.persons[2].age}/>
    </div>
    );
    // return React.createElement('div',null,'h1','Hi React App')
  }
}

export default App;
