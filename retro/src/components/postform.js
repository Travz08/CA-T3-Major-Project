import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


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
    const user_id = this.props.auth.id
    this.state.submit({type, title, content, log_id, user_id});
    console.log(this.state.submit)
  }

  render(){
  return (

    <div className="container row">

            <form className="col s12" onSubmit={this.handleFormSubmission.bind(this)}>
            <div className="row">
              <div className="input-field">
              posting to log id: {this.state.logId}<br/>

                <input id="type" type="text" className="validate" name="type"/>
                <label htmlFor="type" >Type &nbsp;</label>
              </div>
              <div className="input-field">
                <input id="title" type="text" className="validate" name="title"/>
                <label htmlFor="title" >Title &nbsp;</label>
              </div>
              <div className="input-field col s6">
                <input id="content" type="text" className="validate" name="content"/>
                <label htmlFor="content" >Content &nbsp;</label>
              </div>
            </div>
              <button className="waves-effect waves-light btn" >Create Post</button>
              <ModalFooter>
                                    <Button color="primary" type="submit">save</Button>{' '}
                                    </ModalFooter>
            </form>          
 

    </div>
  )
  }
}

function mapStateToProps(state) {
 // returning an object, and passing it to Header as props.
  return {auth: state.auth}
}


export default connect(mapStateToProps)(PostForm)
