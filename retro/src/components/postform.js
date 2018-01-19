import React, { Component } from 'react';



export default function PostForm({ onSubmit }) {

// This function pushes it up the line you can embed a function within a function then it pushes it
// to the onSubmit function

function handleFormSubmission(event) {
  //this preventDefault tells the DOM
  // when you click on a button on a form or div that click propogates up each element has a default action
  // prevent default prevents the default action of the element
  // event.stopPropagation - prevents the event from going up the chain
  // event.preventDefault();
  // // console.log(event.target.elements);
  // const {elements} = event.target;
  // const type = elements["type"].value;
  // const title = elements["title"].value;
  // const content = elements["date_ended"].value;
  // const user_id =
  // // const comments = elements["comments"].value;
  // onSubmit({type, title, content});

  console.log(this.props.auth)

}

  return (
    <div className="container row">
      <form className="col s12" onSubmit={handleFormSubmission}>
      <div className="row">
        <div className="input-field col s6">
          <input id="type" type="text" className="validate" name="type"/>
          <label htmlFor="type" >Type &nbsp;</label>
        </div>
        <div className="input-field col s6">
          <input id="title" type="text" className="validate" name="title"/>
          <label htmlFor="title" >Title &nbsp;</label>
        </div>
        <div className="input-field col s6">
          <input id="content" type="text" className="validate" name="content"/>
          <label htmlFor="content" >Content &nbsp;</label>
          {this.handleFormSubmission()}
        </div>
      </div>
        <button className="waves-effect waves-light btn" type="submit">Create Post</button>
      </form>
    </div>
  )
}
