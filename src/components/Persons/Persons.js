import React,{Component} from 'react';
import Person from '../Persons/Person/Person';

class Persons extends Component{
  componentWillMount(){
    console.log('[Persons.js] componentWillMount');
  }
  componentDidMount(){
    console.log('[Persons.js] componentDidMount');
  }

  componentWillReceiveProps(nextProps){
    console.log('[ Update Persons.js] componentWillReceiveProps',nextProps);
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('[ Update Persons.js] shouldComponentUpdate',nextProps,nextState);
    return nextProps.persons !==this.props.persons || 
    nextProps.clicked !== this.props.clicked || 
    nextProps.changed !== this.props.changed;
  }
  componentWillUpdate(nextProps,nextState){
    console.log('[ Update Persons.js] componentWillUpdate',nextProps,nextState);
  }

  componentDidUpdate(){
    console.log('[Persons.js] componentDidUpdate');
  }
  render() {
    console.log('[Persons.js] Render');
    return this.props.persons.map((person,index) => {
      return <Person name = {person.name} age = {person.age}
      click ={() => {this.props.clicked(index);}}
      key = {person.id}
      changed = {(event) => {this.props.changed(event,person.id);}}/>;
    });
  }
} 

export default Persons;
