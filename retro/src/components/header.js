import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

  renderContent() {
    // auth can only be one of three values, why we use a switch statement.
    switch (this.props.auth) {
      case null:
        return 'Still deciding';
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>
      default:
        return <li><a href="/api/logout">Logout</a></li>
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Link to={this.props.auth ? '/logs' : '/'}>This is the Header </Link>
        <ul>
          {this.renderContent()}
          <li>
        <a href="/auth/google"> Sign in with Google</a>
          </li>
        </ul>
      </div>
    )
  }
};

  // gets called with the entire state object out of the redux store.
  // the only thing we care about is the auth piece of state.
function mapStateToProps(state) {
 // returning an object, and passing it to Header as props.
  return {auth: state.auth}
}

// same as above
// function mapStateToProps({auth}) {
//  // returning an object, and passing it to Header as props.
//   return {auth}
// }


export default connect(mapStateToProps)(Header)
