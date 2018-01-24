import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
// redux import
import { connect } from 'react-redux';
// importing actions
import * as actions from './actions'
// importing components
import Header from './components/header.js';
import Landing from './components/landing';
import Dashboard from './components/dashboard.js';
import Classroom from './components/classroom';

// import * as retroAPI from './api/retrospect'
import logo from './logo.svg';
import './App.css';
import Logs from './components/logs';
// import Post from './components/posts';
import ClassRoomForm from './components/classform';
import ClassRoom from './components/classroom';
//bring in the api calls component to save into state on app load
import * as logsAPI from './apiCalls/logs'
import * as postsAPI from './apiCalls/posts'
import * as classAPI from './apiCalls/classrooms';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { logs: null, posts: null}
    console.log(props)
  }




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

    classAPI.all()
      .then(classData => {
        this.setState({classrooms: classData.classroom})
      })
  }

  handleClassRoomSubmission = (classroom) => {
    // console.log(title,yearReleased);
    //give it the previous state and then mutate it
    this.setState(( {classrooms}) => (
      { classrooms: [classroom].concat(classrooms) }
    ));


  classAPI.save(classroom);
  }

  handleLogSubmission = (log) => {
    this.setState(({ logs }) => (
      { logs: [log].concat(logs) }
    ));

    logsAPI.store(log);
  }

  handlePostSubmission = (post) => {
    this.setState(({ posts }) => (
      { posts: [post].concat(posts) }
    ));

    postsAPI.store(post);
  }


  render() {
    const { logs, posts, classrooms } = this.state;
    // console.log(logs, posts)


    const LogClassroom = (props) => {
      return (
      <Logs logs={logs} posts={posts} classrooms={classrooms} onSubmit={this.handlePostSubmission} onLogSubmit={this.handleLogSubmission} {...props} />
      );
    }

    return (
     <div className="App">
     <BrowserRouter>
      <div>
        <Header />
        <Route exact path ="/classroom/:id" component={LogClassroom} />
        <Route exact path="/classroom" render={() => (<ClassRoom classrooms={classrooms} /> )} />
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route exact path='/' component={Landing}></Route>
     </div>
     </BrowserRouter>
    </div>
    );
  }
}

function mapStateToProps(state) {
 // returning an object, and passing it to Header as props.
  return {auth: state.auth}
}

export default connect(null, actions)(App);
