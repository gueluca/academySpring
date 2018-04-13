import React, {Component} from 'react';



class Person extends Component {

    render() {

        return ( 
        <p onClick={this.props.click}> 
        
         Hi I'm a {this.props.name} and I'm {this.props.age} years old 
         <p> {this.props.children} </p>
        </p>
        );
    }



}

export default Person;