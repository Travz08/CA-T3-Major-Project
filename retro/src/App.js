import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions'
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Header from './components/header.js';
import Landing from './components/landing';
import Dashboard from './components/dashboard.js';
import Classroom from './components/classroom';
import Title from './components/log.js'
import { Row, Col, Card, CardTitle, CardSubtitle, CardText, CardBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';


class App extends Component {
  // lifecycle method - as soon as component is rendered on screen go fetch the current user.
  componentDidMount() {
    this.props.fetchUser();
  }

=======
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



>>>>>>> 3a46d4fc231625c25756049fa13b76c15c1974a0
  render() {
    const { logs, posts } = this.state;
    // console.log(logs, posts)
    
    return (
<<<<<<< HEAD
      <div className="App">
        <BrowserRouter>
            <div>
            <Header />
            <Switch>
              <Route exact path="/classroom" component={Classroom}></Route>
              <Route path="/logs" component={Dashboard}></Route>
              <Route path='/' component={Landing}></Route>
              </Switch>
            </div>
        </BrowserRouter>
=======
     <div className="App">
        <Logs logs={logs}/>
        <Post posts={posts}/>
        

>>>>>>> 3a46d4fc231625c25756049fa13b76c15c1974a0
      </div>
    );
  }
}

export default connect(null, actions)(App);
