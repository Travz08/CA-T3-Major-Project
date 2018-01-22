import React, { Component } from 'react';
import Post from './posts';
import PostForm from './postform';
import * as logsAPI from '../apiCalls/logs'
import * as postsAPI from '../apiCalls/posts'


import { Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, Modal, ModalHeader, ModalBody, ModalFooter      } from 'reactstrap';
import { Link } from 'react-router-dom';

class Log extends Component {

      constructor(props) {
            super(props);
            this.state = {log: this.props.log, posts: this.props.posts, classId: this.props.classId, submit: this.props.onSubmit, modal: false}

            this.toggle = this.toggle.bind(this);

        }


    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    render() {
          if (this.state.classId === this.state.log.classroom_id) {

            if (!this.state.log) {
              return (<div> Loading.. </div>)
            }

            return (

                    <Col className="col-md-3" style={{minHeight:"100vh"}}>
                    <ListGroup className="logBase">
                        <ListGroupItem active>
                            <ListGroupItemHeading>{this.state.log.text} {this.state.log.date}
                                <br/>

                                <Button color="success" onClick={this.toggle}>{this.props.buttonLabel}NEW POST </Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>
                                    New Post
                                </ModalHeader>
                                    <ModalBody>
                                        posting to log id: {this.state.log._id}<br/>
                                        <PostForm logs={this.state.log._id} onSubmit={this.state.submit} />
                                    </ModalBody>

                                </Modal>
                                <br/>
                                    <span>
                                        Classroom ID: {this.state.log.classroom_id}
                                    </span>
                            </ListGroupItemHeading>
                        </ListGroupItem>
                        <ListGroupItem>
                        <Post posts={this.state.posts} logId={this.state.log._id} />
                        </ListGroupItem>
                    </ListGroup>
                    </Col>

            )
    } else {
      return (
        null
      )
    }
  }
}




export default Log
