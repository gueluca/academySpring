import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import '../App.css';


class ButtonContainer extends Component {

    render() {

        return (
           <div>
            <Button key="add" className="buttonStyle" >{'+'}</Button>
            <Button key="sub" className="buttonStyle" >{'-'}</Button>
            <Button key="mul" className="buttonStyle" >{'*'}</Button>
            <Button key="div" className="buttonStyle" >{'/'}</Button>
           </div>

        );
    }
}


export default ButtonContainer;