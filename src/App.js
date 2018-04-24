import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
     return (
    <div className="App">
     <h1> Hi, </h1>
     <Person name ="Vivek" age = "30"/>
     <Person name ="Divya" age = "29">My Hobby is drawing</Person>
     <Person name ="Krishna" age = "29"/>
    </div>
    );
    //return React.createElement('div',null,'h1','Hi React App')
  }
}

export default App;
