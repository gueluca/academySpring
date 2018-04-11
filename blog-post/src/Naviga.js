import React, {Component} from 'react';
import logo from './img/t-logo.png'; // relative path to image
import {Navbar,
  Nav,
        NavDropdown,
        MenuItem,
        NavItem} from 'react-bootstrap';

class Naviga extends Component{

  render(){
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
              <a href="#home"><img src={logo} className="Nav-logo"/></a>
          </Navbar.Brand>
        </Navbar.Header>
      <Nav>
      

        <NavDropdown eventKey={3} title="Menu" id="dropdownMenu">
        <MenuItem eventKey={3.}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
        </Nav>
        </Navbar>

          );
  }
}
export default Naviga;
