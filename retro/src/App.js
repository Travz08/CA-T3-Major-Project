import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// redux import
import { connect } from 'react-redux';
// importing actions
import * as actions from './actions'
// importing components
import Post from './components/post';
import Header from './components/header.js';
import Landing from './components/landing';
import Dashboard from './components/dashboard.js';
import Classroom from './components/classroom';


// import * as retroAPI from './api/retrospect'
import logo from './logo.svg';
import './App.css';
import Logs from './components/logs';
// import Post from './components/posts';
import ClassRoomForm from './components/classroom';
//bring in the api calls component to save into state on app load
import * as logsAPI from './apiCalls/logs'
import * as postsAPI from './apiCalls/posts'
import * as retroAPI from './apiCalls/retrospect';



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

    retroAPI.all()
      .then(classrooms => {
        this.setState({classrooms})
      })
  }

  handleClassRoomSubmission = (classroom) => {
    // console.log(title,yearReleased);
    //give it the previous state and then mutate it
    this.setState(( {classrooms}) => (
      { classrooms: [ classroom].concat(classrooms) }
    ));


  retroAPI.save(classroom);
  }

  render() {
    const { logs, posts } = this.state;
    // console.log(logs, posts)

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
        <Logs logs={logs} posts={posts}/>
        <ClassRoomForm onSubmit={this.handleClassRoomSubmission} />

    </div>
    );
  }
}

export default connect(null, actions)(App);
