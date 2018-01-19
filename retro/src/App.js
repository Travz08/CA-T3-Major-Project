import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions'
import logo from './logo.svg';
import './App.css';
import Logs from './components/logs';
import Post from './components/post';
import Header from './components/header.js';
import Landing from './components/landing';
import Dashboard from './components/dashboard.js';
import Classroom from './components/classroom';
import Title from './components/log.js'

//bring in the api calls component to save into state on app load
import * as logsAPI from './apiCalls/logs'
import * as postsAPI from './apiCalls/posts'


class App extends Component {

  state = { logs: null, posts: null}


  componentDidMount() {
    // action creator - will start the action. 
    this.props.fetchUser();

    logsAPI.all()
      .then(logData => {
        this.setState({ logs: logData.logs })
      })

    postsAPI.all()
      .then(postData => {
        this.setState({ posts: postData.post })
      })

  }
  render() {
    const { logs, posts } = this.state;


    return (
     <div className="App">

     <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/classroom" component={Classroom}></Route>
        <Route path="/logs" component={Dashboard}></Route>
        <Route path='/' component={Landing}></Route>
     </div>

     </BrowserRouter>
        <Logs logs={logs}/>
        <Post posts={posts}/>
      </div>
    );
  }
}

export default connect(null, actions)(App);
