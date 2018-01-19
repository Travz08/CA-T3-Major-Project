import React, { Component } from 'react';


class PostForm extends Component {

  render(){


  return (
    <div className="container row">
      <form className="col s12" onSubmit={this.handlePostSubmission}>
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
        </div>
      </div>
        <button className="waves-effect waves-light btn" type="submit">Create Post</button>
      </form>
    </div>
  )
  }
}

export default PostForm
