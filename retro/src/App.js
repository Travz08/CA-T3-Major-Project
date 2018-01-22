import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// redux import
import { connect } from 'react-redux';
// importing actions
import * as actions from './actions'
// importing components
import Header from './components/header.js';
import Landing from './components/landing';
import Dashboard from './components/dashboard.js';
import Classroom from './components/classroom';
import PostForm from './components/postform';
import ShowLogs from './components/showlogs'

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

    classAPI.all()
      .then(classData => {
        this.setState({classrooms: classData.classroom})
      })
  }

  handleClassRoomSubmission = (classroom) => {
    // console.log(title,yearReleased);
    //give it the previous state and then mutate it
    this.setState(( {classrooms}) => (
      { classrooms: [ classroom].concat(classrooms) }
    ));


  classAPI.save(classroom);
  }

  handlePostSubmission = (post) => {
    // postsAPI.save(post);
    this.setState(({ posts }) => (
      { posts: [post].concat(posts) }
    ));

    postsAPI.store(post);
  }


  render() {
    const { logs, posts, classrooms } = this.state;
    
  const MyPostForm = (props) => {
    return (
      <PostForm
        {...props} onSubmit={this.handlePostSubmission}
      />
    );
  }

    const LogClassroom = (props) => {
      return (
      <Logs logs={logs} posts={posts} onSubmit={this.handlePostSubmission} {...props} />
      );
    }

    return (
     <div className="App">
     <BrowserRouter>
      <div>
        <Header />
        <Route path="/post/:logId" component={MyPostForm} />
        <Route exact path ="/classroom/:id" component={LogClassroom} />
        <Route exact path="/classroom" render={() => (<ClassRoomForm onSubmit={this.handleClassRoomSubmission} classrooms={classrooms} /> )} />
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/logs" render={() => (<Logs logs={logs} posts={posts} onSubmit={this.handlePostSubmission} />)} />
        <Route exact path='/' component={Landing}></Route>
     </div>
     </BrowserRouter>
    </div>
    );
  }
}


export default connect(null, actions)(App);
