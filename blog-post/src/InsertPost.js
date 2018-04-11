import React, {Component} from 'react';
import {Button, FormGroup, FormControl, HelpBlock} from 'react-bootstrap';
import axios from 'axios';
class InsertPost extends Component{
  constructor() {
         super();
         this.state = {
           title: '',
           body: '',
           email: '',
         };
       }

       onChange = (e) => {
         // Because we named the inputs to match their corresponding values in state, it's
         // super easy to update the state
         const state = this.state
         state[e.target.name] = e.target.value;
         this.setState(state);
         console.log(this.state);
       }

       onSubmit = (e) => {
         e.preventDefault();
         // get our form data out of state
         const { title, body, email } = this.state;

         axios.post('https://jsonplaceholder.typicode.com/posts/', { title, body, email })
           .then((result) => {
             //access the results here....
           });
       }


       render() {
         const { title, body, email } = this.state;
         return (
           <form onSubmit={this.onSubmit}>
             <FormGroup>

               <FormControl
               type="text"
               name="title"
               value={title}
               placeholder="Enter Post title"
               onChange={this.onChange}
             />
               <FormControl
               type="text"
               componentClass="Textarea"
               name="body"
               value={body}
               placeholder="Enter Post Body"
               onChange={this.onChange}
             />
               <FormControl
               type="text"
               name="email"
               value={email}
               placeholder="youremail@domain.it"
               onChange={this.onChange}
             />
               <Button type="submit">Submit</Button>

               <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
           </form>
         );
       }
     }

export default InsertPost;
