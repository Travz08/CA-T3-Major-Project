import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions'
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import Landing from './components/landing'
import Dashboard from './components/dashboard.js'
import Title from './components/log.js'
import { Row, Col, Card, CardTitle, CardSubtitle, CardText, CardBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';


class App extends Component {
  // lifecycle method - as soon as component is rendered on screen go fetch the current user.
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <div>
            <Header />
            <Switch>
              <Route path="/logs" component={Dashboard}></Route>
              <Route path='/' component={Landing}></Route>
              </Switch>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
