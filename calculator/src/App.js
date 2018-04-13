import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import ButtonContainer from './components/ButtonContainer';
import './App.css'
import InputContainer from './components/InputContainer';

class App extends Component {



  handleInput = () => {

    this.setState({

        firstValue: this.firstValue.value,
        secondValue: this.secondValue.value,
    }) };


  render() {
    return (
    <div className="App">
       <Grid>
         <Row className="show-grid" xs={3} >
          <Col className="my-col" sm={8} > 
           <InputContainer handleInput={this.handleInput} />
           

          
          </Col>    
          <Col className="my-col" sm={4} >
           <ButtonContainer />
           </Col>  
         </Row>

         <Row>
          <Col sm={8} > <div> Result: </div> </Col>
          <Col sm={8} >
           <button > {'Clear'} </button>
           </Col>


         </Row>
      </Grid>    
    </div>
    );
  }
}

export default App;