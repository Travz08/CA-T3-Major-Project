import React, { Component } from 'react';
import { Button, Modal, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class LogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {classId: this.props.classId, submit: this.props.onSubmit, modal: false, isLogSubmitted: false}
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
    const date = elements["date"].value;
    const classroom_id = this.state.classId;
    this.state.submit({date , classroom_id});
    this.setState({isLogSubmitted: true})
  }

  render(){
  return (

            <Form onSubmit={this.handleFormSubmission.bind(this)}>
              <FormGroup>
                <Label htmlFor="date" >Date &nbsp;</Label>
                <Input id="date" type="date" className="validate" name="date"/>
              </FormGroup>
              <ModalFooter>
                <Button color="primary" type="submit" onClick={this.toggle}>Submit</Button>
              </ModalFooter>
            </Form>


  )
  }
}
