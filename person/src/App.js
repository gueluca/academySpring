import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {


  state = {
    persons: [
      {name: 'Max',age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}

    ]

  };

  switchNameHandler = () => {  

    this.setState({
      persons: [
        {name: 'Maximilian', age: 45},
        {name: 'Manu', age: 10},
        {name: 'Stephanie', age: 56}
      ]
    });
  }

  render() {
    return (
      <div className="App">
      <button onClick={this.switchNameHandler} > Switch Name </button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={this.switchNameHandler} />
        <Person 
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}> My hobbies are: Droning </Person>
        <Person 
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}/>
      </div>

    );
  }
}

export default App;
