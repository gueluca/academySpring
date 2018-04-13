import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import axios from 'axios';
import InsertPost from './components/InsertPost';
import Naviga from './components/Naviga';
import Login from './components/Login';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      comments: [],
      selectedPostId: null,
  };

  }

  getProfiles = () => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/users',
    }).then(({ data: profiles }) => {
      this.setState({ profiles});
    });
  }


  getComments = () => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/comments',
      params: {
        postId: this.state.selectedPostId,
      },
    }).then(({ data: comments }) => {
      this.setState({ comments });
    });
  }

  handlePostClick = (postId) => {
    this.setState({ selectedPostId: postId }, this.getComments);
  }

  componentDidMount(){

    this.getProfiles();
  }

  render() {
    return [

          <BrowserRouter>
            <div key={1} class="App">
              <header>
                <div class="wrap">
                  <div class="AppHeader">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                  </div>
                  <div class="content nav">
                    <Naviga className="Nav-logo"/>
                  </div>
                </div>
              </header>

              <div className="App-intro">
                <Switch>
                  <Route>

                  </Route>
                </Switch>
              </div>
        


            </div>
          </BrowserRouter>
    ];
  }
}

export default App;
