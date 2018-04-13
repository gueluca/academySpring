import React, {Component} from 'react';
import {FormControl} from 'react-bootstrap';
import '../App.css';

class InputContainer extends Component {
    
    constructor(){

        super();

        this.state = {
            firstValue : "",
            secondValue: "",
        };
    }

   

    
    render() {

        return (
            
          <form >
              <FormControl placeholder="Inserisci un numero"
              onChange={this.props.handleInput} 
              inputRef= { (ref) => { this.firstValue =ref}} />

              <FormControl placeholder="Inserisci un numero"
              onChange={this.props.handleInput}
              inputRef= { (ref) => {this.secondValue=ref}} />

          </form>
            
        );
    }
}

export default InputContainer;