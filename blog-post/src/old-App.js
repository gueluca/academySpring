import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Col, Row, ListGroup} from 'react-bootstrap';
import axios from 'axios';
import Post from './Post';
import Comments from './Comments'
class App extends Component {
constructor(){
  super();
  this.state = {
    posts: [],
    selectedPostId: null,
      }
this.handlePostClick = () => {
  console.log('clicked')
}
}
getPosts = () => {
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
  }).then(({data: posts}) =>this.setState({posts}));
}


//this.setState({posts: posts})
// E' UGUALE A this.setState({posts}) PERCHE' IL NOME DELLA VARIABILE
// E' UGUALE AL VALORE DA ATTRIBUIRE

//Quando c'è il return di qualcosa, non c'è bisogno del return nè le graffe

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
        <Grid>
          <Row>
            <Col md ={6}>
              <button onClick={this.getPosts}>{'Get Posts'}</button>
              <ListGroup>
              {this.state.posts.map((post) => <Post title={post.title}
              onClick={this.handlePostClick}
              />


              )}

              </ListGroup>
            </Col>
            <Col md ={6}>
              <Comments />

            </Col>
          </Row>
        </Grid>
        </div>
      </div>
    );
  }
}

export default App;
