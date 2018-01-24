import React, { Component } from 'react';
import Log from './single_log';
import {
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row
} from 'reactstrap';
import LogForm from './logform'

export default class Logs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      log: this.props.logs,
      posts: this.props.posts,
      classId: this.props.match.params.id,
      submit: this.props.onSubmit,
      logSubmit: this.props.onLogSubmit,
      classroomName: this.props.classrooms
      }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }


  render() {

  //Guards while API returns something
    if (!this.state.posts) {
      return (
        <div>
          Loading Everything!..
        </div>
      )
    }

    if (!this.state.classroomName) {
      return (
        <div>Loading Classroom Name...</div>
      )
    }

    if (!this.state.log) {
      return (
        <div>Loading Logs...</div>
      )
    }

//Sorts array by date. Oldest to newest
    const sortedLogs = [].concat(this.state.log)
      .sort((oldest, newest) => oldest.date > newest.date)
//Renders the correct classroom name to DOM
    const renderClassroomName = () => {
      return this.state.classroomName.map((classroomname) => {
        if (classroomname._id == this.state.classId) {
      return classroomname.class_name }
      });
    }

    const logsItems = () => {
      return sortedLogs.map((log) => {
      return (
        <Log
          posts={this.state.posts}
          classId={this.state.classId}
          log={log}
          key={this.state.log._id}
          onSubmit={this.state.submit}
        />)
      });
    }

    return (
      <div className="list-group" key={this.state.log.id}  >
        <h1 className="mx-auto classroom-header trademark">{renderClassroomName()}</h1>
         <Container-fluid>
            <Row className="col-12">
              {logsItems()}
              <Col className="col-lg-4">
              <ListGroup className="logBase">
                  <ListGroupItem active>
                      <ListGroupItemHeading>
                        <div>Add a new log</div>
                      <Button className="newPostButton" onClick={this.toggle}>{this.props.buttonLabel} + </Button>

                      <Modal isOpen={this.state.modal} toggle={this.toggle}>
                      <ModalHeader toggle={this.toggle}>
                          New Log
                      </ModalHeader>
                          <ModalBody>
                              <LogForm
                                classId={this.state.classId}
                                onSubmit={this.state.logSubmit} />
                          </ModalBody>
                      </Modal>
                      </ListGroupItemHeading>
                  </ListGroupItem>
              </ListGroup>
              </Col>
            </Row>
         </Container-fluid>
       </div>
      )
    }
  }
