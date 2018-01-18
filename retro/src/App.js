import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logs from './components/logs';
import Post from './components/post';

//bring in the api calls component to save into state on app load
import * as logsAPI from './apiCalls/logs'
import * as postsAPI from './apiCalls/posts'


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

export default App;
