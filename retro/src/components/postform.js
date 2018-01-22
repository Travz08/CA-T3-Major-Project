import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {logId: this.props.logs, submit: this.props.onSubmit, modal: false}
    console.log(this.state.submit)

    this.toggle = this.toggle.bind(this);

  }

  //modal code

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleFormSubmission(event) {

    //this preventDefault tells the DOM
    // when you click on a button on a form or div that click propogates up each element has a default action
    // prevent default prevents the default action of the element
    // event.stopPropagation - prevents the event from going up the chain
    event.preventDefault();
    const {elements} = event.target;
    const type = elements["type"].value;
    const title = elements["title"].value;
    const content = elements["content"].value;
    const log_id = this.state.logId;
    const user_id = this.props.auth.id;
    this.state.submit({type, title, content, log_id, user_id});
  }

  render(){
  return (

            <Form className="col s12" onSubmit={this.handleFormSubmission.bind(this)}>

              <FormGroup>
                <Label for="title">Title</Label>
                <Input id="title" type="text" className="validate" name="title"/>
              </FormGroup>

              <FormGroup>
                <Label for="type">Type</Label>
                <Input id="type" type="select" className="validate" name="type">
                  <option>Summary</option>
                  <option>Challenge</option>
                  <option>Resource</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="content">Content</Label>
                <Input id="content" type="textarea" className="validate" name="content"/>
              </FormGroup>

            <div className="row">
              posting to log id: {this.state.logId}<br/>
            </div>

              <ModalFooter>
                <Button color="primary" type="submit" onClick={this.toggle}>Submit</Button>
              </ModalFooter>
            </Form>


  )
  }
}

function mapStateToProps(state) {
 // returning an object, and passing it to Header as props.
  return {auth: state.auth}
}


export default connect(mapStateToProps)(PostForm)
