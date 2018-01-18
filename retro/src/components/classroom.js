import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Classroom extends Component {

  renderFirstName() {
    console.log(this.props.auth)
    return  this.props.auth.first_name;
  }


  render() {
    if(!this.props.auth) {
    return (<div> Loading </div>)
  }

    return (
      <div>
        <h2>This is the classroom</h2>
          <h3>{this.renderFirstName()}</h3>
      </div>
    )
  }
};

function mapStateToProps(state) {
 // returning an object, and passing it to Header as props.
  return {auth: state.auth}
}

export default connect(mapStateToProps)(Classroom)
