import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions'
// import * as retroAPI from './api/retrospect'
import logo from './logo.svg';
import './App.css';
import Logs from './components/logs';
import Post from './components/post';

//bring in the api calls component to save into state on app load
import * as logsAPI from './apiCalls/logs'
import * as postsAPI from './apiCalls/posts'

  handleClassRoomSubmission = (classroom) => {
    // console.log(title,yearReleased);
    //give it the previous state and then mutate it
    this.setState(( {classrooms}) => (
      { classrooms: [ classroom].concat(classrooms) }
    ));


  retroAPI.save(classroom);
  }

class App extends Component {

  state = { logs: null, posts: null}


  componentDidMount() {
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
    // console.log(logs, posts)

    return (
     <div className="App">
        <Logs logs={logs}/>
        <Post posts={posts}/>


      </div>
    );
  }
}

export default connect(null, actions)(App);
