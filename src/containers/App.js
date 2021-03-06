import React, { Component } from 'react';
import classes from '../containers/App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    persons :[
      {id:'1',name : 'Vivek', age :30},
      {id:'2',name : 'Divya', age :29},
      {id:'3',name : 'Krishna', age :29}
    ],
    showPersons : false
  }
 componentWillMount(){
  console.log('[App.js] componentWillMount');

 }
 componentDidMount(){
  console.log('[App.js] componentDidMount');
 }
 shouldComponentUpdate(nextProps,nextState){
  console.log('[ Update App.js] shouldComponentUpdate',nextProps,nextState);
  return nextState.persons !== this.state.persons ||
  nextState.showPersons !== this.state.showPersons;
}
componentWillUpdate(nextProps,nextState){
  console.log('[ Update App.js] componentWillUpdate',nextProps,nextState);
}

componentDidUpdate(){
  console.log('[App.js] componentDidUpdate');
}
   changed = (event,id) => {
     const personIndex = this.state.persons.findIndex(p=>{return p.id===id;});
     const person = {...this.state.persons[personIndex]};
     person.name = event.target.value;
     const persons = [...this.state.persons];
     persons[personIndex] = person;
    this.setState({persons :persons});
  }

  clicked = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }
  
  togglePersonHanlder =() => {
    const currentState = this.state.showPersons;
    this.setState({
      showPersons : !currentState
    });
  }

  render() {
    console.log('[App.js] Render');
    let persons = null;
    if (this.state.showPersons){
           persons = (
          <Persons
            persons = {this.state.persons}
            clicked ={this.clicked}
            changed = {this.nameChangeHandler}/>       
      );
    }
    
     return (
          <div className={classes.App}>
          <button onClick ={() => {this.setState({showPersons : true});}}>Show Persons</button>
            <Cockpit
              appTitle = {this.props.appTitle} 
              showPersons = {this.state.showPersons}
              persons = {this.state.persons}
              toggle = {this.togglePersonHanlder}/>
            {persons}
          </div>
    );
  }
}

export default App;
